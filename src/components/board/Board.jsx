import React, { useState, useEffect } from "react";
import CalculateNextSize from "./calculator/CalculateNextSize";
import { uniqid } from 'uniqid'
import './board.css'

const Board = ({ Width, Length, arr }) => {
  const [boards, setBoards] = useState([]);
  const [showWidth, setShowWidth] = useState(Width);
  const [showLength, setShowLength] = useState(Length);
  const [quantity, setQuantity] = useState(1);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addNewBoards = () => {
    const inputWidth = showWidth + "px";
    const inputLength = showLength + "px";

    const newBoards = [];
    for (let i = 0; i < quantity; i++) {
      newBoards.push({
    
        width: inputWidth,
        height: inputLength,
        backgroundColor: getRandomColor(),
      });
    }
    setBoards([...boards, ...newBoards]);
  };

  const clearBoards = () => {
    setBoards([]);
  };

  useEffect(() => {
    setShowWidth(Width);
    setShowLength(Length);
  }, [Width, Length]);

  useEffect(() => {
    clearBoards();
  }, [arr]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={showWidth}
          onChange={(e) => setShowWidth(e.target.value)}
        />
        <input
          type="text"
          value={showLength}
          onChange={(e) => setShowLength(e.target.value)}
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="button" onClick={addNewBoards}>Добавить новые доски</button>
        <button type="button" onClick={clearBoards}>Очистить доски</button>
      </div>
      <div className="global-board">
        {boards.map((smallBoard) => (
          <div
            style={{
              width: smallBoard?.width,
              height: smallBoard?.height,
              backgroundColor: smallBoard?.backgroundColor,
            }}
            className="boards"
            key={smallBoard?.id}
          ></div>
        ))}
      </div>

 
      <CalculateNextSize smallWidth={showWidth} smallLength={showLength} quantity={quantity} />
    </div>
  );
};

export default Board;
