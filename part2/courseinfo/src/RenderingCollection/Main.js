import React from "react";
import TampilanNote from "./TampilanNote";

const Main = ({ notes }) => {
  return (
    <>
      <h1>Notes</h1>

      <ul>
        {/* pertama */}
        <h3>rendering biasa</h3>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>

        {/* kedua [sama saja, yang bawah lebih simple dan juga tambahkan key agar setiap list memiliki keunikan] */}
        <h3>rendering menggunakan map</h3>
        {notes.map((note) => (
          <li key={note.id}>{note.date}</li>
        ))}

        {/* destructuring */}
        <h3>rendering map dengan destructuring tampilan dipisah</h3>
        {notes.map((note) => (
          <>
            <TampilanNote key={note.id} tampilanNote={note} />
            {console.log(note)}
          </>
        ))}
      </ul>
    </>
  );
};

export default Main;
