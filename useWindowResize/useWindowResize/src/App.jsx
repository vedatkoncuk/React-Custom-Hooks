import React from "react";
import useWindowResize from "./components/test.jsx";

function App() {
  const { width, height } = useWindowResize();

  return (
    <div style={{ padding: "50px" }}>
      <h1>Window Size Tracker</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default App;
