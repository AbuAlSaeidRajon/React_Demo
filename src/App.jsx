import './App.css'
import Box from './Box'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState("for example")
  const [persons, setPersons] = useState([
    {name:"Saeid", title:"Full Stack Web Developer", location:"Helsinki"}, 
    {name:"Jake", title:"Developer", location:"Tampere"}, 
    {name:"Joe", title:"Designer", location:"Lappeenranta"}
  ]);

  return (
    <>
    <p>Counter: {counter}</p>
    {persons.map((person) => (
      <>
    <p>{person.name}</p>
    <p>{person.title}</p>
    <p>{person.location}</p>
      </>
    ))}
    </>
  );
}

export default App
