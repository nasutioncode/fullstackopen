import React from "react";

const Content = ({ dataCourse }) => {
  // const total = dataCourse.reduce((jum, v) => {
  //   console.log(v);
  //   jum = dataCourse.parts.reduce((jum, v) => (jum = jum + v.exercises), 0);
  //   return jum;
  // });

  return (
    <>
      {dataCourse.map((kursus) =>
        kursus.parts.map((anak) => (
          <>
            <p key={kursus.id}>
              {anak.name} {anak.exercises}
            </p>

            <p>
              total :
              {kursus.parts.reduce((jum, v) => (jum = jum + v.exercises), 0)}
            </p>
          </>
        ))
      )}
    </>
  );
};

export default Content;
