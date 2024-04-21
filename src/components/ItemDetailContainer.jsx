import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import '../app.css';
import {doc, getDoc} from "firebase/firestore" //aca ya no necesito traer todo la colecttion, solamente necesito un doc
import { ItemDetail } from './ItemDetail';
import { db } from '../firebase/config';


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();

    useEffect(() => {
 const docRef= doc (db, "items",id);

 getDoc (docRef). then ((resp)=>{
    setProduct ({...resp.data(), id: resp.id})
 })
    },[id])

    if (!product) return null;

    return (
        <div>
        {product && <ItemDetail item={product} />}
    </div>
    )
}