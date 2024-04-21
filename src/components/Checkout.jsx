import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "./context/CartContext";
import {collection, addDoc} from "firebase/firestore";
import {db} from "../firebase/config";

export const Checkout =()=> {
const [ordersId, setOrdersId]= useState ("");
  const { cart, precioTotal, removeList} = useContext(CartContext);
 const {register, handleSubmit}=useForm (); 


const buy =(enviarDatos)=>{
const order={

  client: enviarDatos,
  items: cart,
  total: precioTotal ()

}
console.log(order);
const orderRef =collection (db, "orders");
addDoc (orderRef, order) .then ((doc)=>{
  setOrdersId(doc.id);
  removeList ();
})
}
if (ordersId){
 return (<div> <h2>Muchas gracias por su compra!</h2>
 <p>Tu numero de pedido es {ordersId}</p>

 </div>)

}

  return (

<div>
<h1 className="finalizar-compra">Finalizar compra</h1>
  <form  className="form-finalizar" onSubmit={handleSubmit(buy)}>
<input className="nombre" type="text" placeholder="Ingresá nombre" {...register ("name")}/>
<input className="email" type="email" placeholder="Ingresá mail" {...register ("email")} />
<input className="phone" type="phone" placeholder="Ingresá tu telefono" {...register ("phone")} />
<button className="submit" type="submit" >Submit</button>
  </form>
</div>
  );
}
