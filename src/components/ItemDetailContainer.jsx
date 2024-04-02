import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

import Card from 'react-bootstrap/Card'; 
import Container from 'react-bootstrap/Container';

import data from "../data/productos.json";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then ((data) => {
                const filteredData = data.find (d => d.id === Number(id));
                setProduct(filteredData);             
        });
    },[id]);

    if (!product) return null;

    return (
        <Container className='mt-4 text-center' >
            <Card>
                <Card.Img variant="top" src={product.pictureUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <strong>${product.price}</strong>
                </Card.Body>
            </Card>
        </Container>
    )
}