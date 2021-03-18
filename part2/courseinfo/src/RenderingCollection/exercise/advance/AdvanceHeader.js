import React from "react";

const Header = (dataCourse) => {
  return (
    <>
      {dataCourse.dataCourse.map((kursus) => (
        <>
          <h2 key={kursus.id}>
            {kursus.name} {kursus.exercises}
          </h2>
        </>
      ))}
    </>
  );
};
export default Header;
