import React from "react";

const Button = ({ name, count, onClick, type }) => {
  return (
    <button
      onClick={() => {
        if (type === 0) {
          if (count < 10) {
            onClick(count + 1);
          } else {
            alert("Cannot Vote more");
          }
        } else {
          if (count > 0) {
            onClick(count - 1);
          } else {
            alert("Cannot Unvote");
          }
        }
      }}
    >
      {name}
    </button>
  );
};

export default Button;
