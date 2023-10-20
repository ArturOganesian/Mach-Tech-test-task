// import "./final.css";
// import Board from "../board/Board";
// import { useState } from "react";
// import { Button } from "antd";

// const FinalInfo = ({
//   valueWidth,
//   valueLength,
//   valueQuantity,
//   valueQuantityNeed,
//   valueQuantityArr,
//   valueArr,
// }) => {
//   const [showBoard, setShowBoard] = useState(false);

//   const showByClick = () => {
//     setShowBoard(true);
//   };
//   const closeByClick = () => {
//     setShowBoard(false);
//   };
//   const width = valueWidth;
//   const length = valueLength;
//   const quantity = valueQuantity;
//   return (
//     <div className="global-final-info">
//       <h2>Վերջնական արդյունք</h2>
//       <p>
//         <span> նախընտրած տախտակի երկարություն/</span>
//         {width} մմ
//       </p>
//       <p>
//         <span>նախընտրած տախտակի լայնություն/</span>
//         {length} մմ
//       </p>
//       <p>
//         <span>նախընտրած տախտակի քանակ/</span>
//         {quantity} հատ
//       </p>
//       <p>
//         <span>Քանի տախտակ է հարկավոր/</span>
//         {valueQuantityNeed}
//       </p>
//       <Button onClick={showByClick} className="form-button">
//         Ավելացնել
//       </Button>
//       <Button onClick={closeByClick}>Ջնջել</Button>
//       {showBoard && (
//         <Board
//           arr={valueArr}
//           Length={valueLength}
//           Width={valueWidth}
//           quantityDiv={valueQuantityArr}
//         />
//       )}
//     </div>
//   );
// };

// export default FinalInfo;
