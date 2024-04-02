import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {
  return (
    <Card className='card'>
      <Card.Img className='card-img' variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Link to={`/product/${product.id}`}>
          <Link to={`/item/${product.id}`}><Button variant="primary">Ver más</Button></Link>
        </Link>
      </Card.Body>
    </Card>
  );
};