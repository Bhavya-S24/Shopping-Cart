import React from 'react';

function Product(props) {
    const{product,onAdd}=props;
  return (
    <div>
        <img className='small' src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>Rs:{product.price}</div>
        <button onClick={()=>onAdd(product)}>Add</button>
    </div>
  )
}
export default Product