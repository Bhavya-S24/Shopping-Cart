import React from 'react';
import Product from './Product';

function Main({products,onAdd}) {
  // const {products}=props;
  return (
    <main className="block col-2">
        <h2>Products</h2>
        <div className="row">
          {products.map((product) => (<Product key={product.id} onAdd={onAdd} product={product}></Product>))}
        </div>
   </main>
  );
}
export default Main