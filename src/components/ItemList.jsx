import {Item} from './Item'
import '../app.css';
export  const ItemList=({products, titulo})=> {


  return (
    <>
      <h2>{titulo}</h2>
     <div className='d-flex flex-wrap'>
        { products.map (product =><Item key={product.id} product ={product} />)}
    </div>
    </>
  
  )
}