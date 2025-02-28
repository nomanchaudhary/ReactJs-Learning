import React, { useState } from "react";

function Bgchange() {
  const [color, setColor] = useState("white");
  return (
    <div style={{ backgroundColor: color, width: "100%", height: "100vh" }}>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("orange")}>Orange</button>
      <button onClick={() => setColor("olive")}>Olive</button>
    </div>
  );
}

export default Bgchange;
