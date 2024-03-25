import './App.css'
import Box from './Box'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState("for example")

  return (
    <>
    <p>Counter: {counter}</p>
    <Box name="Saeid" title="Full Stack Web Developer" location="Helsinki"/>
    <Box name="Jake" title="Developer" location="Tampere"/>
    <Box name="Joe" title="Designer" location="Lappeenranta"/>
    </>
  )
}

export default App
