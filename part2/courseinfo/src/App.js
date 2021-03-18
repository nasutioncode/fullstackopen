import React from "react";
import NoteForm from "./Form/NoteForm";
// import CollectionData from "./RenderingCollection/CollectionData";
// import Course from "./RenderingCollection/exercise/Course";
// import AdvanceCourse from "./RenderingCollection/exercise/advance/AdvanceCourse";
import Form from "./Form/MainForm";

function App() {
  return (
    <div>
      {/* materi rendering collection */}
      {/* <CollectionData /> */}

      {/* exercise */}
      {/* <div style={{ backgroundColor: "lightcoral" }}>
        <h1>course basic exercise materi rendering collection</h1>
        <Course />
      </div>
      <hr />
      <div style={{ backgroundColor: "lightblue" }}>
        <h1>ADVANCED course basic exercise materi rendering collection</h1>
        <AdvanceCourse />
      </div> */}

      {/* materi rendering collection */}
      <NoteForm />
    </div>
  );
}

export default App;
