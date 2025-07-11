import React from "react";

export const Button = ({
  cls,
  label,
  handleOnButtonClick,
  handleOnMouseDown,
  btnStyle,
  isMouseDown,
}) => {
  return (
    <div
      style={label === isMouseDown ? btnStyle : null}
      onMouseDown={() => handleOnMouseDown(label)}
      onClick={() => handleOnButtonClick(label)}
      className={`btn ${cls}`}
    >
      {label}
    </div>
  );
};
