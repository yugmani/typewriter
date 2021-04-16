import React from "react";

function ReactRotatingText() {
  const RotatingText = require("react-rotating-text");
  return (
    <div className="rotating-text">
      I am{" "}
      <RotatingText
        style={{ color: "red" }}
        items={["first", "second", "third"]}
      />
    </div>
  );
}

export default ReactRotatingText;
