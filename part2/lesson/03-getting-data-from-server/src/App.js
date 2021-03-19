import React, { useState, useEffect } from "react";
import Notes from "./components/Notes";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  // const [newNote, setNewNote] = useState("");
  // const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fullfiled hehe");
      setNotes(response.data);
    });
  };

  useEffect(hook, []);

  // useEffect(() => {
  //   console.log("effect");
  //   axios.get("http://localhost:3001/notes").then((response) => {
  //     console.log("promise fullfiled hehe");
  //     setNotes(response.data);
  //   });
  // }, []);

  console.log("render", notes.length, "notes");

  return (
    <div>
      <h1>getting data from server</h1>
      <p>hahah</p>
    </div>
  );
}

export default App;
