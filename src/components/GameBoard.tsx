import "../style/boardStyle.scss";

const GameBoard = () => {
  const createBox = () => {
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";

    const boardBox = document.querySelector(".boardBox");

    if (boardBox !== null) {
      boardBox.appendChild(div);
    }
  };

  createBox();

  return <div className="boardBox"></div>;
};

export default GameBoard;
