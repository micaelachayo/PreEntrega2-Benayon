
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

    
export const Item = ({product}) =>{
    return (
  
        <Card className='card' >
          <Card.Img className='card-img' variant="top" src={product.pictureUrl} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <strong >${product.price}</strong>
            <Link to={`/item/${product.id}`}><Button className= "button mb-0 mt-4" variant="primary">Ver Producto</Button></Link>
          </Card.Body>
        </Card>
    );
  }