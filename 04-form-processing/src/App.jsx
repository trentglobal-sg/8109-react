import { useState } from "react"
export default function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [flight, setFlight] = useState("budget");
  // for checkboxes, we use empty array
  const [travelReasons, setTravelReasons] = useState([]);

  const handleCheckbox = (event) => {

    // if we are checking the checkbox (putting the tick), then event.target.checked will be `true`
    if (event.target.checked) {
      // In react, we cannot modify an array directly
      // travelReasons.push(event.target.value);
      // setTravelReasons(travelReasons);

      // // 1. create a clone
      // const cloned = travelReasons.slice();
      // // 2. modify the clone
      // cloned.push(event.target.value);
      // // 3. replace the array in the state with the clone
      // setTravelReasons(cloned);

      setTravelReasons([...travelReasons, event.target.value]);
    } else {
      const indexToDelete = travelReasons.findIndex(item => {
        // event.target.value is the value of the checkbox being unchecked
        // item is one element from the travelReasons 
        return item === event.target.value
      })

      // const indexToDelete = travelReasons.findIndex(i => i === event.target.value)
      const cloned = travelReasons.toSpliced(indexToDelete, 1);
      setTravelReasons(cloned)

    }


  }

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
        checked={flight === "economy"}
      /><label>Economy</label>

      <input type="radio" name="flight" value="business"
        onChange={(event) => {
          setFlight(event.target.value)
        }}
        checked={flight === "business"}
      /><label>Business</label>
    </div>

    <div>
      <label>What do you usually travel for: </label>

      <input type="checkbox" name="travel-reason" value="food"
        onChange={handleCheckbox}
        checked={travelReasons.includes("food")}
      />
      <label>Food</label>

      <input type="checkbox" name="travel-reason" value="shopping"
        onChange={handleCheckbox}
        checked={travelReasons.includes("shopping")}
      />
      <label>Shopping</label>

      <input type="checkbox" name="travel-reason" value="extreme-sports"
        onChange={handleCheckbox}
        checked={travelReasons.includes("extreme-sports")}
      />
      <label>Extreme Sports</label>

      <input type="checkbox" name="travel-reason" value="sight-seeing"
        onChange={handleCheckbox}
        checked={travelReasons.includes("sight-seeing")}
      />
      <label>Sight Seeing</label>

      <input type="checkbox" name="travel-reason" value="others"
        onChange={handleCheckbox}
      />
      <label>Others</label>

    </div>


    <p>Hello, {firstName} {lastName}</p>
    <button>Submit</button>

  </>)
}