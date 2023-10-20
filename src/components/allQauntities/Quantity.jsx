// This component shows how many times you create  a table

import { useState } from "react";

const Quantity = ({quantity}) => {
   

    return ( 
     <div className="final-qunatity">
        <p style={{ color: "tomato" }}>Ավելացված տախտակների քանակ։ <span style={{ color: "black" }}>{quantity}</span></p>
          
        </div>
     );
}
 
export default Quantity;