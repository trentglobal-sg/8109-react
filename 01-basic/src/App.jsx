import image from "./japanese-food-2.jpg";
import dog from "./images/dog-playing-at-bishan-park.jpg";
import "./App.css"
// export default means we want to share whatever that is after it with other
// JavaScript files. It's similair to: module.exports = blah_blah_blah
export default function App() {

  const number1 = 3;
  const number2 = 4;

  // whatever JSX element you return from the App will be rendered for the user to see
  // a function can only return one JSX element at a time
  return <>
    <h1>Hello World</h1>
    {/* To provide inline style, it must be in a form of JavaScrip object */}
    <h2 style={{
      fontFamily: "Verdana",
      fontSize: "14px"
    }}>Happy</h2>
    <p>Happy Holidays</p>
    <p>Today's date is {new Date().toLocaleDateString("en-GB")}</p>
    <p>{number1 + number2}</p>
    <img src={image}/>
    <img src={dog}/>
  </>

}