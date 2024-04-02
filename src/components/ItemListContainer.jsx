import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import data from "../data/productos.json";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState ("productos")
  const { id } = useParams(); //para capturar la variable de la ruta

  useEffect(() => {
    const recibo = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    recibo.then((data) => {
      if (id) {
        const filtrandoData = data.filter((d) => d.category === id);
        setProducts(filtrandoData);
        setTitulo (id);
      } else {
        setProducts(data);
        setTitulo ("productos");
      }
    });
  }, [id]);

  return (
    <>
      <ItemList products={products} titulo= {titulo} />
    </>
  );
};
