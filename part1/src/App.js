import React, { useState } from "react";
// import Display from "./Display";
// import Button from "./Button";

/** TOPIC
 * Complex state
 * Handling arrays
 * Conditional rendering
 * Old React
 * Debugging React applications
 * Rules of Hooks
 * Event Handling Revisited
 * Function that returns a function
 * Passing Event Handlers to Child Components
 * Do Not Define Components Within Components
 * Useful Reading
 **/

const App = (props) => {
  // const [counter, setCounter] = useState(0);

  // const handleClickPlus = () => {
  //   setCounter(counter + 1);
  // };
  // const handleClickMinus = () => {
  //   setCounter(counter - 1);
  // };
  // const handleClickReset = () => {
  //   setCounter(0);
  // };

  // ==== complex state

  // const [right, setRight] = useState(0);
  // const [left, setLeft] = useState(0);
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });

  // ==== handling array
  const [allClick, setAll] = useState([]);

  const handleLeftClick = () => {
    // setAll(allClick.concat("L"));
    // console.log(allClick.concat("L"));

    allClick.push("push L");
    setAll(allClick);
    console.log(allClick.concat("push L"));

    setClick({ ...click, left: click.left + 1 });
  };

  const handleRightClick = () => {
    setAll(allClick.concat("R"));
    console.log(allClick.concat("R"));
    setClick({ ...click, right: click.right + 1 });
  };

  // ==== coonditional rendering

  const History = (props) => {
    if (props.allClick.length === 0) {
      return (
        <>
          <p>aplikasi digunakan dengan menekan tombol</p>
        </>
      );
    }
    return <div>button press history: {props.allClick.join(" ")}</div>;
  };

  const Button = ({ actionName, buttonName }) => {
    console.log("ini props di button...", actionName, buttonName);
    return <button onClick={actionName}>{buttonName}</button>;
  };

  return (
    <>
      {/* <Button buttonClick={handleClickMinus} buttonName="-" />
      <Display counter={counter} />
      <Button buttonClick={handleClickPlus} buttonName="+" />
      <Button buttonClick={handleClickReset} buttonName="Reset" /> */}

      {/* // ==== complex state */}
      {click.left}
      <Button actionName={handleLeftClick} buttonName="Left" />
      <Button actionName={handleRightClick} buttonName="Right" />
      {click.right}

      <History allClick={allClick} />
    </>
  );
};
export default App;
