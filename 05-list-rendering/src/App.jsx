export default function App() {

  const shops = ["MacDonalds", "Uniqlo", "Minxue", "Chagee", "Starbucks"];
  const events = [
    {
      "date": new Date("2026-12-23"),
      "name": "Christmas Lucky Draw"
    },
    {
      "date": new Date("2026-12-24"),
      "name": "Carol Singing Session"
    },
    {
      "date": new Date("2026-12-25"),
      "name": "25% off shopping spree"
    }
  ]

  const eventList = events.map(function (item) {
    return <li key={item.name}>{item.name} ({item.date.toLocaleDateString("en-GB")})</li>
  })

  // to render a list of items, we will need to have an array of JSX elements,
  // one JSX element per item

  const shopJSX = [];

  for (let s of shops) {
    shopJSX.push(<li className="list-group-item">{s}</li>)
  }

  return (<>
    <div className="container">
      <h1>Shop Directory</h1>
      <ul className="list-group">
        {shopJSX}
      </ul>

      <h2>Upcoming Events</h2>
      <ul>
        {eventList}
      </ul>

      <ul>
        {
          events.map(function(item){
            return <li key={item.name}>
              {item.date.toLocaleDateString("en-GB")} : {item.name}
            </li>
          })
        }
      </ul>

    </div>



  </>)
}