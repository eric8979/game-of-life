import { Fragment } from "react";
import "../style/boardStyle.scss";

const GameBoard = () => {
  // TODO:Delete size Var, and button once connected to Redux

  const size = 100;

  const createBox = () => {
    var div = document.createElement("div");
    div.classList.add("boxItem");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    const boardBox = document.querySelector(".boardBox");

    if (boardBox !== null) {
      boardBox.appendChild(div);
    }
  };

  return (
    <Fragment>
      <div className="boardBox"></div>
      <button onClick={() => createBox()}>createBox() testing</button>
    </Fragment>
  );
};

export default GameBoard;
