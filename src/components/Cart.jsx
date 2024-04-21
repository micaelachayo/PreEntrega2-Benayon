import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import Figure from "react-bootstrap/Figure";
import "../app.css";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, precioTotal, removeList, deleteItem} = useContext(CartContext);
  
  const handleEliminar = (id) => {
    deleteItem(id);
  };
  const handleVaciar = () => {
    removeList();
  };
  return (
    <>
    <div><h3 className="text-center">carrito</h3></div>
      
      <Container className="d-flex">
      {cart.map((prod) => (
        <Card key={prod.id} className="text-center pb-1">
          {
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt={prod.image}
                src={prod.image}
              />
            </Figure>
          }
          <div>
            <h4>{prod.title}</h4>
            <p>Precio unitario: ${prod.price}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio total: ${prod.price * prod.cantidad}</p>
            <button className="eliminar" onClick={() => handleEliminar(prod.id)} >Eliminar</button>
          </div>
        </Card>
      ))}
</Container>
      {cart.length > 0 ? 
        <>
          
          <p className="fs-5 text-center">Precio total: ${precioTotal()}</p>
          <div className="text-center"> 
            <button className="p-2 vaciar-carrito" onClick={handleVaciar}>Vaciar carrito</button>
            <Link to="/checkout"><button className="ms-5 p-2 finalizar-compra-boton">Finalizar Compra</button></Link>
          </div>
        </>
       : 
        <h5>Lo sentimos, su carrito esa vacio 😔</h5>
      }
      </>

  );
};
