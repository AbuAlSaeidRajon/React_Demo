import './App.css'
import Box from './Box'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState("for example")
  const [persons, setPersons] = useState([
    { id:1, name:"Saeid", title:"Full Stack Web Developer", location:"Helsinki"} , 
    { id:2, name:"Jake", title:"Developer", location:"Tampere" }, 
    { id:3, name:"Joe", title:"Designer", location:"Lappeenranta" },
  ]);

  return (
    <>
    <p>Counter: {counter}</p>
    {persons.map((person) => (
      <Box
      key={person.id}
    name={person.name}
    title={person.title}
    location={person.location}
      />
    ))}
    </>
  );
}

export default App
