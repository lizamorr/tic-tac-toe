import { Square } from './Square';

interface BoardProps {
  squares: (string | null)[];
  onClick: (i: number) => void;
}

export const Board = ({ squares, onClick }: BoardProps) => {
  const renderSquare = (squareIndex: number) => {
    return (
      <Square
        value={squares[squareIndex]}
        onClick={() => onClick(squareIndex)}
      />
    );
  };

  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
