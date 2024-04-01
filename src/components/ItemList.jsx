
import {Item} from './Item'
import '../app.css';
export  const ItemList=({products})=> {
  return (
    <div className="row">
     <div className='d-flex flex-wrap'>
        { products.map (product =><Item key={product.id} product ={product} />)}
    </div>
    </div>
  
  )
}
