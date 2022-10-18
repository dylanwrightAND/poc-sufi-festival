import logo from './logo.svg';
import './App.css';

function App() {

  const getAttendees = async () => {
      const response = await fetch('https://www.eventbriteapi.com/v3/events/443933827027/attendees/?token=GB33BZ3UZXJ5PO4VQ2PB');

      console.log(await response.json());
  }

  return (
    
    <div className="App">
    <button onClick={getAttendees}>Get Attendees</button>
    </div>
  );
}

export default App;
