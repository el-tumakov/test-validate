import React from "react";

const style = {
  display: "flex",
  width: "100%",
  padding: "20px",
  backgroundColor: "lightgreen",
  border: "1px solid green",
};

const SomeComponent = (props) => {
  return <div style={style}>{props.children}</div>;
};

export default SomeComponent;
