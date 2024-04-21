import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoInicial);

  const addToCart = (item, cantidad) => {

    const addItem = { ...item, cantidad };
    const loQueYaTengoEnCarrito = cart.find(
      (producto) => producto.id === addItem.id
    ); //busca si hay prod en el carrito

    if (loQueYaTengoEnCarrito) {
      loQueYaTengoEnCarrito.cantidad += cantidad; //se suma la cantidad que esta en el carrito
      setCart([...cart]); //se seteo el carrito y ahora tengo el array nuevo de carrito
    } else {
      setCart([...cart, addItem]);
    }
  };

  const cantidadEnCArrito = () => {
    return cart.reduce((acc, producto) => acc + producto.cantidad, 0);
     // acumula lo que hay y le suma la cantidad de productos que tenemos y arranca en 0
  };

  const precioTotal = () => {
    return cart.reduce(
      (acc, producto) => acc + producto.cantidad * producto.price,
      0
    );
  };
  const removeList = () => {
    setCart([]);
  };
  const deleteItem = (id) => {
    //Esto crea un nuevo array que contiene solo los elementos del carrito cuyo id no coincide con el id del producto que se quiere eliminar.
    const nuevoCarrito = cart.filter((producto) => producto.id !== id);
    setCart(nuevoCarrito);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);
  //cada vez que el estado de carrito cambie, se agregue a carrito como un texto plano y no object (stringify)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cantidadEnCArrito,
        precioTotal,
        removeList,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
