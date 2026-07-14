import { useState } from "react"
export default function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [flight, setFlight] = useState("budget");
  return (<>

    <h1>Tourism Survey</h1>
    <div>
      <label>First Name</label>
      <input type="text"
        value={firstName}
        onChange={(event) => {
          // all event listenters can recieve a function as the event handler
          // all event handlers can recieve one argument which is the event (an object)
          // event.target.value will be the new value of the input
          setFirstName(event.target.value);
        }}
      />
    </div>

    <div>
      <label>Last Name</label>
      <input type="text" value={lastName}
        onChange={(event) => {
          setLastName(event.target.value)
        }}
      />
    </div>

    <div>
      <label>Which class of flight you usually travel on</label>
      <input type="radio" name="flight" value="budget"
        onChange={(event) => {
          setFlight(event.target.value)
        }}
        checked={flight === "budget"}
      /><label>Budget</label>

      <input type="radio" name="flight" value="economy"
        onChange={(event) => {
          setFlight(event.target.value)
        }}
        checked={flight==="economy"}
      /><label>Economy</label>

      <input type="radio" name="flight" value="business"
        onChange={(event) => {
          setFlight(event.target.value)
        }}
        checked={flight==="business"}
      /><label>Business</label>
    </div>


    <p>Hello, {firstName} {lastName}</p>
    <button>Submit</button>

  </>)
}