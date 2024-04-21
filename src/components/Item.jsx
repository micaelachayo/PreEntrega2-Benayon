import { Figure } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {
  return (
    <Card className='card'>
      <Figure>
        <Figure.Image
          className='card-image'
          alt={product.image}
          src={product.image}
        />
      </Figure>
      <Card.Body>
        <Card.Title className='card-title'>{product.title}</Card.Title>
        <Card.Text className='card-price'>${product.price}</Card.Text>
        <Card.Text className='card-category'>Categoría: {product.categoryId}</Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button className='ver-mas'>Ver más</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};