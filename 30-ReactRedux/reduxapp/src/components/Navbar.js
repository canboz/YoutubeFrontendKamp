import React from 'react';
import { useSelector } from 'react-redux';

import { BsFillBasketFill } from 'react-icons/bs';

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  //   console.log(useSelector((store) => store.cart));
  console.log(quantity);
  return (
    <div className="navbar">
      <h3>Kurs Uygulaması</h3>
      <div className="navDiv">
        <div className="itemsDiv">
          <p>{quantity}</p>
        </div>
        <BsFillBasketFill className="itemsIcon" />
      </div>
    </div>
  );
}

export default Navbar;
