import Sidebar from "./Sidebar";
import Header from "./Header";
import AvailableSeats from "./AvailabeSeats";
import Events from "./Events";
import CompletedHours from "./HourStat";
import RoutineSuggestion from "./RoutineSuggestion";
import logo from "../assets/logo.png";
import background from "../assets/background.png";
import GroupCoachingCarousel from "./GroupCoachingCarousel";
import EventCalendar from "./EventCalendar";
import morning_img from "../assets/sunset 1.png";
import lunch_img from "../assets/lunch-box 2.png";
import night_img from "../assets/cloudy 1.png";
import Affirmation from "./Affirmation";
import WisdomWindow from "./WisdomWindow";
import EngagementRate from "./EngagementRate";
import MobileHeader from "./MobileHeader";
import { useEffect, useState } from "react";
import axios from "axios";

const morningroutine = [
  {
    name: ["Guided Meditation", "Mindfulness", "Alpha"],
    duration: "(10:00)",
  },
  { name: ["Meditation Music", "Theta"], duration: "(10:00)" },
];

const lunchRoutine = [
  { name: ["Guided Meditation", "Relax", "Beta"], duration: "(10:00)" },
  { name: ["Meditation Music", "Theta"], duration: "(10:00)" },
];

const bedtimeroutine = [
  { name: ["Guided Meditation", "Relax", "Delta"], duration: "(10:00)" },
  { name: ["Meditation Music", "Going to Sleep"], duration: "(10:00)" },
];

function Dashboard() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("token");
    if (accessToken) {
      console.log(accessToken)
      fetchCalendarEvents(accessToken);
    }
  }, []);

  const fetchCalendarEvents = async (accessToken) => {
    try {
      const response = await axios.get("http://localhost:3000/events", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setEvents(response.data);
      console.log(response.data)
      localStorage.setItem("calendarEvents", JSON.stringify(response.data));
      // const urlWithoutParams = window.location.origin + window.location.pathname;
      // window.history.replaceState(null, '', urlWithoutParams);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div className="flex flex-wrap overflow-x-hidden">
      <div className="max-md:hidden h-[100vh] flex flex-col justify-between">
        <div className="logo h-[220px] relative z-10">
          <img src={logo} className="object-cover w-full h-full" alt="" />
        </div>
        <Sidebar />
      </div>

      <main className="relative flex flex-col max-md:w-full md:flex-1 items-center overflow-y-auto overflow-x-clip h-[100vh] md:pt-11  max-w-full  md:pr-12 md:pl-4">
        <div className="max-lg:hidden bg-image absolute z-10 right-0 top-20 ">
          <img src={background} alt="" className="object-contain" />
        </div>
        <div className="md:container w-full relative z-20">
          <Header />
          <MobileHeader />
          <div className="main-content max-md:px-2 max-lg:flex max-lg:flex-col max-lg:items-center mt-6 md:mt-24">
            <AvailableSeats />

            <div className="max-lg:flex max-lg:justify-center">
              <section className="mt-10 md:mt-14 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 max-lg:max-w-[500px]  relative">
                <div className="next_events_container absolute z-30 -top-48 right-[25%] max-xl:hidden">
                  <div className="events relative z-30  font-poppins text-lg w-[180px] h-[110px] flex flex-col justify-center items-center rounded-[30px] text-white bg-[#FF904E] ">
                    <p>Next </p>
                    <p className="font-semibold">Events</p>
                  </div>
                  <div className="left_line border border-[#EA7C51] absolute w-48 rotate-60 left-20 -bottom-4"></div>
                  <div className="right_line border border-[#EA7C51] absolute w-48 -rotate-60 -left-20  -bottom-4"></div>
                </div>

                <CompletedHours />
                <GroupCoachingCarousel />
                <EventCalendar events={events} />
              </section>
            </div>

            <div className="max-lg:flex max-lg:flex-col max-lg:justify-center">
              {" "}
              <div className="routine_heading">
                <div className="flex gap-8 font-semibold font-poppins mt-10 xl:mt-14 justify-start">
                  <h3 className=" mt-3.5 text-lg text-zinc-800">
                    Routine Suggestion
                  </h3>
                  <button className="px-5 py-3 text-xs text-white bg-orange-400 rounded-[100px]">
                    Make your own routine
                  </button>
                </div>
              </div>
              <div className=" md:w-[500px] lg:w-full">
                <section className="  mt-4  grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10 max-md:mt-10 max-md:mr-1.5 max-md:grid-cols-1  max-lg:max-w-[500px] ">
                  <RoutineSuggestion
                    routineItems={morningroutine}
                    period="Morning"
                    image={morning_img}
                  />
                  <RoutineSuggestion
                    routineItems={lunchRoutine}
                    period="After Lunch"
                    image={lunch_img}
                  />
                  <RoutineSuggestion
                    routineItems={bedtimeroutine}
                    period="Bedtime"
                    image={night_img}
                  />
                </section>
              </div>
            </div>

            <section className="  md:mt-6 flex max-lg:items-center max-lg:flex-col gap-10 justify-between mb-8">
              <div className="left max-md:mt-10 lg:w-1/2 xl:w-1/3">
                <Affirmation />
              </div>
              <div className="right flex flex-col w-full lg:w-1/2 xl:w-2/3">
                <WisdomWindow />
                <EngagementRate />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
