import React, { useContext } from "react"; 
import carrito from "../assets/carrito.svg";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const {cantidadEnCArrito}= useContext(CartContext);
  return (
  <>
<Link to="/cart">
        <img src={carrito} alt="carrito" />
      </Link>
      <b className="numerito">{cantidadEnCArrito()}</b>

</>
  );
};