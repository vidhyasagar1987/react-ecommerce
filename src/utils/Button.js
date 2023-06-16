import React from "react";

const Button = (props) => {
  return (
    <button className="button">
      <span className="button-content">{props.children} </span>
    </button>
  );
};

export default Button;
