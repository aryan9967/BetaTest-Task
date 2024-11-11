import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function EventCalendar({ events }) {
  const [eventDates, setEventDates] = useState({});
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);

  if (!events) {
    events = JSON.parse(localStorage.getItem("calendarEvents"));
  }

  useEffect(() => {
    if (events && events.length > 0) {
      const newEventDates = events.reduce((acc, event) => {
        const date = new Date(event.start.dateTime);
        const dateString = date.toLocaleDateString();
        if (!acc[dateString]) {
          acc[dateString] = [];
        }
        acc[dateString].push(event); // Store the entire event object
        return acc;
      }, {});
      console.log(newEventDates);
      setEventDates(newEventDates);
    }
  }, [events]);

  const showEventDetails = (date) => {
    console.log(date);
    const dateString = date.toLocaleDateString();
    const eventsForDay = eventDates[dateString] || [];
    console.log(eventDates);
    console.log(eventsForDay);
    setSelectedDate(date);
    setSelectedEvents(eventsForDay);
    setIsModalOpen(true);
  };

  const hasEvent = (date) => {
    const dateString = date.toLocaleDateString();
    return eventDates[dateString]?.length > 0 || false;
  };

  return (
    <>
      <div className="relative z-30 flex justify-center">
        <Calendar
          className={
            "flex flex-col items-center justify-center rounded-[30px] p-4"
          }
          onClickDay={(day) => showEventDetails(day)}
          tileContent={({ date, view }) =>
            view === "month" && hasEvent(date) ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute -top-6 w-8 h-8 rounded-full border-2 border-blue-500"></div>
              </div>
            ) : null
          }
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                Events for {selectedDate.toLocaleDateString()}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {selectedEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedEvents.map((event, index) => (
                  <div
                    key={event.id || index}
                    className="border rounded-lg p-4"
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {event.summary}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="font-medium">Start:</span>{" "}
                        {new Date(event.start.dateTime).toLocaleString()}
                      </p>
                      <p>
                        <span className="font-medium">End:</span>{" "}
                        {new Date(event.end.dateTime).toLocaleString()}
                      </p>
                      {event.description && (
                        <p>
                          <span className="font-medium">Description:</span>{" "}
                          {event.description}
                        </p>
                      )}
                      {event.location && (
                        <p>
                          <span className="font-medium">Location:</span>{" "}
                          {event.location}
                        </p>
                      )}
                      {event.attendees && (
                        <div>
                          <span className="font-medium">Attendees:</span>
                          <ul className="ml-4 list-disc">
                            {event.attendees.map((attendee, i) => (
                              <li key={i}>{attendee.email}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No events for this date.</p>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventCalendar;
