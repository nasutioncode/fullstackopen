import React from "react";
import AdvancedTotal from "./AdvancedTotal";
import AdvancedParts from "./AdvancedParts";

const Content = ({ dataCourse }) => {
  return (
    <>
      {dataCourse.map((kursus) =>
        kursus.parts.map((anak) => (
          <>
            {/* <p key={kursus.id}>
              {anak.name} {anak.exercises}
            </p> */}

            <AdvancedParts
              keyInfo={kursus.id}
              courseInfoName={anak.name}
              courseInfoTotal={anak.exercises}
            />

            {/* <AdvancedTotal course={kursus} /> */}
          </>
        ))
      )}
    </>
  );
};

export default Content;
