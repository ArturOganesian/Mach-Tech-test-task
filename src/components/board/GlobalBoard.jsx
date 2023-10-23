import { Input, Button, Modal } from "antd";
import { useState } from "react";
import uniqid from "uniqid";
import "./board.css";

const GlobalBoard = () => {
  const [boards, setBoards] = useState([]);
  const [width, setWidth] = useState();
  const [length, setLength] = useState();
  const [quantity, setQuantity] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWidthChange = (e) => {
    if (e.target.value <= 183) {
      setWidth(e.target.value);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleLengthChange = (e) => {
    if (e.target.value <= 363) {
      setLength(e.target.value);
    } else {
      setIsModalOpen(true);
    }
  };
  const handleQuantityChange = (e) => {
    if (e.target.value <= 500) {
      setQuantity(e.target.value);
    } else {
      setIsModalOpen(true);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addBoards = () => {
    const inputedWidth = width + "px";
    const inputedLength = length + "px";

    const boardList = [];
    for (let i = 0; i < quantity; i++) {
      boardList.push({
        width: inputedWidth,
        height: inputedLength,
        backgroundColor: getRandomColor(),
      });
    }
    setBoards([...boards, ...boardList]);
  };

  const clearBoards = () => {
    setBoards([]);
  };

  return (
    <>
      <section className="board-container">
        <div className="buttons-inputs">
          <h2>Մուտքագրում</h2>
          <Input
            className="input"
            placeholder="Երկարություն"
            size="large"
            addonAfter="մմ"
            type="text"
            value={width}
            onChange={handleWidthChange}
          />

          <Input
            className="input"
            size="large"
            placeholder="Լայնություն"
            addonAfter="մմ"
            type="text"
            value={length}
            onChange={handleLengthChange}
          />
          <Input
            placeholder="Քանակ"
            className="input"
            size="large"
            addonAfter="հատ"
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>

        <div className="board-buttons">
          <Button onClick={addBoards}>Ավելացնել նոր տախտակ</Button>
          <Button onClick={clearBoards}>Ջնջել տախտակները</Button>
        </div>
      </section>
      <div className="global-board">
        {boards.map((smallBoard) => (
          <div
            style={{
              width: smallBoard?.width,
              height: smallBoard?.height,
              backgroundColor: smallBoard?.backgroundColor,
            }}
            className="boards"
            key={uniqid()}
          ></div>
        ))}
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h3 style={{ color: "red" }}>Զգուշացում</h3>

          <p>
            Երկարություն <b>0 - 183</b> <br />
            Լայնություն <b> 0 - 363</b> <br />
            Քանակ <b>0 - 500</b>
          </p>
        </Modal>
      </div>
    </>
  );
};

export default GlobalBoard;
