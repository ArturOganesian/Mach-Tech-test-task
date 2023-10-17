import FinalInfo from "../components/finalInfo/FinalInfo";
import "./form.css";
import { Input ,Modal} from "antd";
import {
  boardWidth,
  boardLength,
  boardSurface,
} from "../handleFunctions/handleFunctions";

import { useState } from "react";

const Form = () => {
  const [widthValue, setWidthValue] = useState(0);
  const [lengthValue, setLengthValue] = useState(0);
    const [quantityValue, setQuantityValue] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);


  const customBoardSurface = widthValue * lengthValue;
  const customBoardsSurfaces = quantityValue * customBoardSurface;
  const boardQuantity = Math.ceil(customBoardsSurfaces / boardSurface);
  console.log(boardQuantity);



    const handleWidthChange = (e) => {
     
            if (e.target.value <= boardWidth) {
                setWidthValue(e.target.value);
            } else {
                setIsModalOpen(true)
            }
        
        };
        
    const handleLengthChange = (e) => {
        
            if (e.target.value <= boardLength) {
                setLengthValue(e.target.value);
            } else {
                setIsModalOpen(true)
            }
        
  };
    const handleQuantityChange = (e) => {
       
            if (e.target.value <= 500) {
                setQuantityValue(e.target.value);
           
            } else {
                setIsModalOpen(true)
            }
        
  };
    
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let arr = [+quantityValue];
  let newArr = [];
  for (let i = arr[0]; i > 0; i--) {
    newArr[i] = i;
  }
  return (
      <div className="global-form-div">
           
          <form className="global-form">
      
              <div className="inputs">
              <h2 className="first-title">Տվյալների Մուտքագրում</h2>
                  <Input
                      type="text"
                      allowClear={true}
                      onChange={handleWidthChange}
                      className="input"
                      size="large"
                      placeholder="ձեր նախընտրած երկարությունը"
                       addonAfter="մմ"
          />
                  <Input
                      type="text"
                       allowClear={true}
                        onChange={handleLengthChange}
                        className="input"
                        size="large"
                        placeholder="ձեր նախընտրած լայնությունը"
                        addonAfter="մմ"
                  />
                  
                  <Input
                      type="text"
                       allowClear={true}
                      onChange={handleQuantityChange}
                      className="input"
                       size="large"
                    placeholder="ձեր նախընտրած քանակը"
            addonAfter="հատ"
          />
                  <Modal title="Զգուշացում" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <p style={{color: "red"}}><b>Տվյալների ներմուծման տեսակը  դրական թվեր !!!</b></p>
                      <p>Առավելագույն երկարություն <b>183սմ</b></p>
                      <p>Առավելագույն լայնություն <b>363սմ</b></p>
                      <p>Առավելագույն քանակ <b>100</b> </p>
                  </Modal>

        </div>

        <FinalInfo
          valueWidth={widthValue}
          valueLength={lengthValue}
          valueQuantity={quantityValue}
          valueArr={newArr}
          valueQuantityNeed={boardQuantity}
              />
              
      </form>
    </div>
  );
};

export default Form;

