import React from "react"; 
import carrito from "../assets/carrito.svg";

export const CartWidget = () => {
  return (
   <div className="text-center">
<img  src={carrito} alt="carrito" /> <b>0</b>
   </div>
    
  );
};