import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("white"); // Track the background color

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // Handle Dark Mode Toggle
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white"; // White text for dark mode
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"; // Black text for light mode
      showAlert("Light mode has been enabled", "success");
    }
  };

  // Handle Background Color Changes
  const handleColorChange = (color) => {
    setBackgroundColor(color); // Update the background color
    document.body.style.backgroundColor = color;

    if (color === "white") {
      document.body.style.color = "black"; // Black text for white background
    } else {
      document.body.style.color = "white"; // White text for other backgrounds
    }

    showAlert(`${color.charAt(0).toUpperCase() + color.slice(1)} background applied`, "success");
  };

  return (
    <>
      <Navbar
        title="Textutils2"
        mode={mode}
        toggleMode={toggleMode}
        handleColorChange={handleColorChange}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
          backgroundColor={backgroundColor} // Pass backgroundColor to TextForm
        />
      </div>
    </>
  );
}

export default App;
