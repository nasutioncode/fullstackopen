const Total = ({ course }) => {
  const countTtotal = course.parts.reduce((jum, v) => {
    // console.log(v);
    jum = course.parts.reduce((jum, v) => (jum = jum + v.exercises), 0);
    return jum;
  });
  return <p>total : {countTtotal}</p>;
};

export default Total;
