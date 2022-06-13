import React from "react";

const NameOfBaby = (props) => {

  return (
    <div className="baby-box" onClick={props.handleClick}>
      <p className="blue">{props.blue}</p>
      <p className="pink">{props.pink}</p>
    </div>
  );
};

export default NameOfBaby;
