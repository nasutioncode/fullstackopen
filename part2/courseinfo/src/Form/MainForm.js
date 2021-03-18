import React, { useState } from "react";
import TampilanNote from "./TampilanNote";

const MainForm = ({ notes }) => {
  //   console.log("ini notes", notes);

  const [noteData, setNoteData] = useState(notes);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    // agar ketika klik button submit tidak reload halaman
    event.preventDefault();

    //inisiasi data berdasarkan inputan
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    //menambah data baru kek array dengan concat
    setNoteData(noteData.concat(noteObject));

    //mengosongkan input field
    setNewNote("");
  };

  //perubahan pada input field
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  //filetering
  const notesToShow = showAll
    ? noteData
    : noteData.filter((note) => note.important);

  return (
    <>
      <h1>Notes</h1>

      <button onClick={() => setShowAll(!showAll)}>
        tampilkan {showAll ? "important" : "all"}
      </button>

      <ol>
        {notesToShow.map((note) => (
          <TampilanNote keyInfo={note} contentInfo={note} />
        ))}
      </ol>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} autoFocus />
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default MainForm;
