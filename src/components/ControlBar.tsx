import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/controlBar.scss";

const ControlBar = () => {
  const [boardSize, setBoardSize] = useState(10);
  const [speed, setSpeed] = useState(5);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (value < 1) {
      window.alert("Enter number bigger than 1");
      return;
    }
    if (e.target.id === "speed") {
      setSpeed(value);
    } else if (e.target.id === "size") {
      setBoardSize(value);
    }
  };

  return (
    <div className="controlBar">
      <h1>Game Of Life</h1>
      <div className="control">
        <button id="start">START</button>
        <button id="next">NEXT</button>
        <label htmlFor="speed">
          Speed
          <input
            type="number"
            id="speed"
            value={speed.toString()}
            onChange={onChange}
          />
        </label>
        <label htmlFor="size">
          Board Size
          <input
            type="number"
            id="size"
            value={boardSize.toString()}
            onChange={onChange}
          />
        </label>
        <button id="clear">CLEAR</button>
      </div>
      <Link to="/about">about</Link>
    </div>
  );
};

export default ControlBar;
