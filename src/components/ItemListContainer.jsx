import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Spinner from 'react-bootstrap/Spinner';
import "../app.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState("Productos");
  const { id } = useParams(); // Para capturar el parámetro de la URL

  useEffect(() => {
    const fetchProducts = async () => {
      const itemsRef = collection(db, "items");
      let itemsQuery = itemsRef;

      // Si hay un parámetro de categoría en la URL, filtrar por esa categoría
      if (id) {
        itemsQuery = query(itemsRef, where("categoryId", "==", id));
       setTitulo (id);
      }else{
        setTitulo (titulo);
      }

      const querySnapshot = await getDocs(itemsQuery);
      const items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(items);
      setLoading(false); // Cambia el estado de carga una vez que se cargan los productos
    };

    fetchProducts();
  }, [id]);

  return (
    <>
   {loading ? (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    ) : (
      <ItemList products={products} titulo={titulo} />
    )}

  </>
  );
};