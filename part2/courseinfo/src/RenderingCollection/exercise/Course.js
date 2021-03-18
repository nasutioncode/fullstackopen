import React from "react";
import Header from "./Header";
import Content from "./Content";

const course = {
  id: 1,
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
      id: 1,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
      id: 2,
    },
    {
      name: "State of a component",
      exercises: 14,
      id: 3,
    },
    {
      name: "Redux",
      exercises: 11,
      id: 4,
    },
  ],
};

const Course = () => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

export default Course;
