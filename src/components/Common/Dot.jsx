import React from "react";

const Dot = ({ online }) => {
  return (
    <>
      <div
        className={online ? "dot-container-green" : "dot-container-red"}
      ></div>
    </>
  );
};

export default Dot;
