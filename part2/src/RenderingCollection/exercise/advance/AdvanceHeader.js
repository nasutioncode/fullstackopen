import React from "react";

const Header = (dataCourse) => {
  // console.log("ini header advanced..", dataCourse.dataCourse[0]);

  return (
    <>
      {dataCourse.dataCourse.map((kursus) => (
        <>
          <h2 key={kursus.id}>
            {kursus.name} {kursus.exercises}
            {/* {console.log("ini advanced header kursus..", kursus)} */}
          </h2>

          {/* {console.log(kursus.reduce((a, v) => (a = a + v.exercises), 0))} */}
        </>
      ))}
    </>
  );
};
export default Header;
