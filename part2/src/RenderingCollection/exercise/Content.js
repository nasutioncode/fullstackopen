import React from "react";

const Content = ({ course }) => {
  const total = course.parts.reduce((jum, v) => {
    // console.log(v);
    jum = course.parts.reduce((jum, v) => (jum = jum + v.exercises), 0);
    return jum;
  });

  return (
    <>
      {course.parts.map((kursus) => (
        <>
          <p key={kursus.id}>
            {kursus.name} {kursus.exercises}
          </p>

          {/* {console.log(kursus.reduce((a, v) => (a = a + v.exercises), 0))} */}
        </>
      ))}
      <p>total : {total}</p>
    </>
  );
};

export default Content;
