import "./board.css";
import uniqid from 'uniqid';

const Board = ({ arr, Width, Length, }) => {
  let showWidth = Width + "px";
  let showLength = Length + "px";

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <>
    
        <div className="global-board" >
          {arr.map((smallBoard,) => (
            <div
              style={{
                width: `${showWidth}`,
                      height: `${showLength}`,
           
                backgroundColor: getRandomColor(),
              }}
              className="boards"
              key={uniqid()}
             
            >
              
                  
            </div>
          ))}
        </div>
    
    </>
  );
};

export default Board;
