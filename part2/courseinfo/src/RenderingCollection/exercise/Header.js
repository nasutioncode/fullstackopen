import React from "react";

const Header = (course) => {
  console.log("ini props course..", course);

  return (
    <>
      <h1>{course.course.name}</h1>
    </>
  );
};
export default Header;
