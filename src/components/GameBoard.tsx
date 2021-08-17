import "../style/boardStyle.scss";

const GameBoard = () => {
  const test = [1, 2, 3, 4, 5];
  const testNumbers = test.map((num) => <div key={num.toString()}>{num}</div>);
  return <div className="boardBox">{testNumbers}</div>;
};

export default GameBoard;
