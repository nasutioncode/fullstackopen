import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);

  const getData = () => {
    console.log("data");

    axios.get("http://localhost:3001/persons").then((response) => {
      const dataPerson = response.data;
      console.log(dataPerson);
      setPersons(dataPerson);
    });
  };

  console.log("data rendering..", persons.length, "personss");

  useEffect(getData, []);

  return (
    <div className="App">
      <h1>exercise</h1>
      {/* <p>{persons.name}</p> */}

      {console.log("ini person..", persons)}

      <ul>
        {persons.map((person) => (
          <li key={person.key}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
