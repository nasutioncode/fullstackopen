import React from "react";
import axios from "axios";

const Negara = ({ data }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {data
        .filter((item) => {
          if (!value) return true;
          if (item.title.includes(value) || item.text.includes(value)) {
            return true;
          }
        })
        .map((item) => (
          <div>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
    </div>
  );
};

export default Negara;
