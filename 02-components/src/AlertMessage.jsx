// function can recieve parameters, so component functions can also recieve parameters
// the first argument of a component function it is properties
// it will be an object
// the key will be defined by the instance of the component
export default function AlertMessage(props) {
  return <div style={{
    "padding":"10px",
    "margin": "10px",
    "border":"1px solid black",
    "color": props.color || "blue"
  }}>
    {props.msg}
  </div>
}