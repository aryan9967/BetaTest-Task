import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { OAuth2Client } from "google-auth-library"
import dotenv from "dotenv"
import {google} from "googleapis"

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.REDIRECT_URI);

app.get('/auth/google', (req, res) => {
    const url = client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/calendar.readonly'],
    });
    res.redirect(url);
});

app.get('/auth/google/callback', async (req, res) => {
    const code = req.query.code;
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);
    res.redirect(`http://localhost:5173/dashboard?token=${tokens.access_token}`);
});

app.get('/events', async (req, res) => {
    const accessToken = req.headers.authorization.split(" ")[1];
    client.setCredentials({ access_token: accessToken });

    try {
        const calendar = google.calendar({ version: 'v3', auth: client });
        const response = await calendar.events.list({
            calendarId: 'primary', // 'primary' refers to the main Google Calendar
            timeMin: new Date().toISOString(), // Get events starting from now
            maxResults: 10, // Limit to 10 events
            singleEvents: true,
            orderBy: 'startTime',
        });

        const events = response.data.items;
        console.log(events)
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).send('Error fetching calendar events');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});