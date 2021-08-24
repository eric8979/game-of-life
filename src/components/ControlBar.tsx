import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/controlBar.scss";

const ControlBar = () => {
  const [boardSize, setBoardSize] = useState("10");
  const [speed, setSpeed] = useState("5");

  return (
    <div className="controlBar">
      <h1>Game Of Life</h1>
      <div className="control">
        <button id="start">START</button>
        <button id="next">NEXT</button>
        <label htmlFor="speed">
          Speed
          <input
            type="text"
            id="speed"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </label>
        <label htmlFor="size">
          Board Size
          <input
            type="text"
            id="size"
            value={boardSize}
            onChange={(e) => setBoardSize(e.target.value)}
          />
        </label>
        <button id="clear">CLEAR</button>
      </div>
      <Link to="/about">about</Link>
    </div>
  );
};

export default ControlBar;
