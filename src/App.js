import { useState } from "react";
import "./App.css";

function App() {
  const [attendees, setAttendees] = useState([]);

  const getAttendees = async () => {
    const response = await fetch(
      "https://www.eventbriteapi.com/v3/events/443933827027/attendees/?token=GB33BZ3UZXJ5PO4VQ2PB"
    );
    const { attendees } = await response.json();
    setAttendees(attendees);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="name">Attendee:</label>
        <input type="text" name="name" />
        <button onClick={getAttendees}>Get Attendees</button>
      </div>
      <div>
        {attendees.map((attendee, index) => (
          <div key={index}>
            <pre>{JSON.stringify(attendee, null, 2)}</pre>
            <pre>{JSON.stringify(attendee.profile, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
