import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ItemCount from "./ItemCount";

export  const ItemDetail = ({ item})=> {
const {  addToCart  } = useContext(CartContext);
 
 const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  const handleIncrease = () => {
    quantity < item.stock && setQuantity(quantity + 1);
  };

  return (
    <Container className="mt-4 text-center">
      <Card className="card-detail">
        <Card.Img className="card-detail-img" variant="top" src={item.image} alt={item.image}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text> stock: {item.stock}</Card.Text>
          <strong>${item.price}</strong>
          <ItemCount
          cantidad={quantity}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleAgregar={ ()=>{addToCart(item, quantity)} }
        />
        </Card.Body>
      </Card>
    </Container>
  );
}
