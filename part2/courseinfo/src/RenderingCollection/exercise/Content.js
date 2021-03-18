import React from "react";
import Part from "./Part";
import Total from "./Total";

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((kursus) => (
        <>
          <Part
            courseInfoName={kursus.name}
            courseInfoTotal={kursus.exercises}
            keyInfo={kursus.id}
          />
        </>
      ))}
      <Total course={course} />
    </>
  );
};

export default Content;
