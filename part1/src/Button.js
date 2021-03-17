const Button = ({ buttonClick, buttonName }) => {
  return (
    <>
      <button onClick={buttonClick}> {buttonName} </button>
    </>
  );
};

export default Button;
