import React from "react";

const CalculateNextSize = ({ smallWidth, smallLength, quantity }) => {
  const bigWidth = 183; // Ширина большой доски
  const bigLength = 363; // Длина большой доски

  // Функция для вычисления размеров больших досок и их количество
  const calculateNextSize = () => {
    const areaOfOneSmallBoard = smallWidth * smallLength;
    const areaOfOneBigBoard = bigWidth * bigLength;
    const totalAreaNeeded = areaOfOneSmallBoard * quantity;

    const numBigBoardsNeeded = Math.floor(totalAreaNeeded / areaOfOneBigBoard);
    const remainingArea = totalAreaNeeded % areaOfOneBigBoard;

    // Остаток больших досок учитывает только оставшуюся площадь после размещения на полных больших досках
    const remainingBigBoards = Math.ceil(remainingArea / areaOfOneBigBoard);

    const nextSize = {
      nextWidth: bigWidth,
      nextLength: bigLength,
      totalBigBoards: numBigBoardsNeeded,
      remainingBigBoards: remainingBigBoards,
    };

    return nextSize;
  };

  const { nextWidth, nextLength, totalBigBoards, remainingBigBoards } = calculateNextSize();

  return (
    <div>
      <h2>Размер следующей большой доски:</h2>
      <p>Ширина: {nextWidth} мм</p>
      <p>Длина: {nextLength} мм</p>
      <p>Всего больших досок необходимо: {totalBigBoards}</p>
      <p>Остаток больших досок: {remainingBigBoards}</p>
    </div>
  );
};

export default CalculateNextSize;
