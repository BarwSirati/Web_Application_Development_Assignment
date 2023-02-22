import React, { useState } from "react";
import Button from "./Button";
import TextBox from "./TextBox";

const Box = ({ topic, secondary, content, imgLink }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="box">
        <div>
          <h3>{topic}</h3>
          <small>{secondary}</small>
          <p>{content}</p>
        </div>
        <div>
          <img src={`${imgLink}`} alt="food" width={300} />
        </div>
      </div>
      <div className="btn-group">
        <Button name={"Click to Vote"} count={count} onClick={setCount} type={0} />
        <TextBox value={count} />
        <Button name={"Click to Unvote"} count={count} onClick={setCount} type={1} />
      </div>
    </div>
  );
};

export default Box;
