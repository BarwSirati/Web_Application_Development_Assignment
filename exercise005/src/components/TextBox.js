import React from "react";

const TextBox = ({ value }) => {
  return (
    <span className="textShow">
      {value === 0 ? "Min" : value === 10 ? "Max" : value}
    </span>
  );
};

export default TextBox;
