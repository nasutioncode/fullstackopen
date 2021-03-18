const Part = ({ keyInfo, courseInfoName, courseInfoTotal }) => {
  return (
    <p key={keyInfo}>
      {courseInfoName} {courseInfoTotal}
    </p>
  );
};

export default Part;
