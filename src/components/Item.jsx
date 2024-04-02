
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../app.css';

    
export const Item = ({product}) =>{
    return (
  
        <Card className='card' >
          <Card.Img className='card-img' variant="top" src={product.pictureUrl} />
          <Card.Body className='card-body'>
            <Card.Title>{product.title}</Card.Title>
            <strong >${product.price}</strong>
            <Link className='boton' to={`/item/${product.id}`}><Button >Ver Producto</Button></Link>
          </Card.Body>
        </Card>
    );
  }