import './App.css'
import Box from './Box'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [persons, setPersons] = useState([
    { id:1, name:"Saeid", title:"Full Stack Web Developer", location:"Helsinki"} , 
    { id:2, name:"Jake", title:"Developer", location:"Tampere" }, 
    { id:3, name:"Joe", title:"Designer", location:"Lappeenranta" },
  ]);

  const clickHandler = () => {
    setCounter(counter + 1)
    };
    const clickDeHandler = () => {
      setCounter(counter - 1)
      };  
  
      const clickZeroHandler = () => {
        setCounter(0)
        };     

  return (
    <>
    <p>Counter: {counter}</p>
    <button onClick={clickHandler}>Increased by 1</button> <br /> <br />
    <button onClick={clickDeHandler}>Decresed by 1</button> <br /> <br />
    <button onClick={clickZeroHandler}>Back to 0</button>
    {persons.map((person) => (
    // here we use list and keys (map) method

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
