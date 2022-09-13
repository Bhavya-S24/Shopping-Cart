import React from 'react';

function Header(props) {
  const {nocartitems}=props;
  return (
   <header className="row block center">
    <div>
        <a href="#/"> <h1 className="Sctext">Shopping Cart</h1></a>
    </div>

    <div>
     <a href="#/cart">Cart {nocartitems?(<button className='badge'>{nocartitems}</button>):''} </a>
     <a href="#/SignIn">SignIn</a>
    </div>
     </header>
  );
}
export default Header