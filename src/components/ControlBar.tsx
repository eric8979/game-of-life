import { Link } from "react-router-dom";
import "../style/controlBar.scss";

const ControlBar = () => {
  return (
    <div className="controlBar">
      <h1>Game Of Life</h1>
      <div className="control">
        <button id="start">START</button>
        <button>NEXT</button>
        <button>speed</button>
        <button>size</button>
        <button id="clear">CLEAR</button>
      </div>
      <Link to="/about">about</Link>
    </div>
  );
};

export default ControlBar;
