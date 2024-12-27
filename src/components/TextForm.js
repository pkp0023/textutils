import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Determine the text color based on background color
  let textColor = "black"; // Default text color
  if (props.mode === "dark" || props.backgroundColor === "black") {
    textColor = "white"; // Change to white for dark mode or black background
  }

  return (
    <div>
      <h1 style={{ color: textColor }}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "white",
            color: textColor,
          }}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
        Convert to Lower Case
      </button>
      <button className="btn btn-danger mx-1" onClick={handleClearText}>
        Clear Text
      </button>

      <div className="container my-3">
        <h2 style={{ color: textColor }}>Your text summary</h2>
        <p style={{ color: textColor }}>
          {text.split(/\s+/).filter((word) => word.length !== 0).length} words,{" "}
          {text.length} characters
        </p>
        <p style={{ color: textColor }}>
          {0.008 *
            text.split(/\s+/).filter((word) => word.length !== 0).length}{" "}
          Minutes read
        </p>
        <h2 style={{ color: textColor }}>Preview</h2>
        <p style={{ color: textColor }}>
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </div>
  );
}
