import React from 'react'
import '../app.css';
export default function ItemCount({cantidad, handleDecrease, handleIncrease,handleAgregar}) {   
  return (
    <div>
        <div className="item-count">
            <button onClick={handleDecrease}>-</button>
            <p>{cantidad}</p>
            <button  onClick={handleIncrease}>+</button>
        </div>
        
            <button className='agregar-carrito-button'  onClick={handleAgregar}>Agregar al carrito</button>
        
    </div>
  )
}
