import React, { useState, useEffect } from "react";
import Notesss from "./components/Notess";
import noteServices from "./services/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [inputNotes, setInputNotes] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteServices.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const handleInput = (event) => {
    setInputNotes(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const addNote = (event) => {
    event.preventDefault();

    const noteObj = {
      id: notes.length + 1,
      content: inputNotes,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    noteServices.create(noteObj).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setInputNotes("");
    });
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteServices
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(`"${note.content}" telah terhapus di server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <div className="App">
      <h1>Notes's Nas</h1>
      <form onSubmit={addNote}>
        <input
          onChange={handleInput}
          value={inputNotes}
          placeholder="Masukkan Note"
          autoFocus
          required
        />
        <button type="submit">Tambah</button> <br />
      </form>
      <h2>List Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>
        tampilkan {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note, i) => (
          <Notesss
            key={i}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
