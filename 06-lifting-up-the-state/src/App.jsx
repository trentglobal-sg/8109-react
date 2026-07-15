import Counter from "./Counter"
import Price from "./Price"

import { useState } from "react"

export default function App() {

 const [count, setCount] = useState(0);

  return <>
    <h1>How Many Tickes to Buy</h1>
    <Counter count={count} setCount={setCount}/>

    <Price count={count}/>


  </>
}