import { Link } from "react-router-dom";
import "../style/controlBar.scss";

const ControlBar = () => {
  return (
    <div className="controlBar">
      <button>START</button>
      <button>NEXT</button>
      <button>CLEAR</button>
      <div>speed</div>
      <Link to="/about">about</Link>
    </div>
  );
};

export default ControlBar;
