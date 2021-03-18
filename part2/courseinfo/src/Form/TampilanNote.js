// display (tampilan)
const TampilanNote = ({ keyInfo, contentInfo }) => {
  console.log("key.. :", keyInfo, contentInfo);
  return <li key={keyInfo.id}>{contentInfo.content}</li>;
};

export default TampilanNote;
