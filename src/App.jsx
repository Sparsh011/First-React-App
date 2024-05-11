import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    if (counter == 20) return
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    if (counter == 0) return
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Current count - {counter}</h1>
    <button
      onClick={incrementCounter}
    >Increase Counter</button>
    <br />
    <br />
    <button
      onClick={decrementCounter}
    >Decrease Counter</button>
    </>
  )
}

export default App
