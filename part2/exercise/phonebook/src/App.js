import React, { useState, useEffect } from "react";

function App(props) {
  const [persons, setPersons] = useState([
    { name: "Nasution", phoneNumber: "08523234723" },
    { name: "Fadi", phoneNumber: "0852334344" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  // const [showAll, setShowAll] = useState(true);
  const [newQuery, setNewQuery] = useState("");

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const addUser = (event) => {
    event.preventDefault();

    const objUser = {
      name: newName.toLowerCase(),
      phoneNumber: newNumber,
    };

    const checkName = persons.map((p) => p.name.toLowerCase());
    const findName = checkName.find((person) => person === objUser.name);

    // console.log("ini checkName", checkName);
    // console.log("ini findName", findName);
    // console.log("ini newName obj", objUser.name);

    if (findName === objUser.name) {
      alert(objUser.name + " nama sudah terdaftar");
    } else {
      setPersons(persons.concat(objUser));
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addUser}>
        <div>
          name : <input value={newName} onChange={handleChangeName} /> <br />
          phone Number :{" "}
          <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {/* <ul>
        {persons.map((person) => (
          <li>
            {person.name} {person.phoneNumber}
          </li>
        ))}
      </ul> */}
      <ul>
        {searchResults.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default App;
