import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import {  CartProvider } from "./components/context/CartContext";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";


function App() {

  return (
 <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={404} />
          <Route path="/cart" element={ <Cart />} />
          <Route path="/checkout" element={ <Checkout />} />

         
        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
