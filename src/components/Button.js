import React from "react";

const Button = ({ onClick = null, name = "Button" }) => {
  return (
    <button className="btn" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
