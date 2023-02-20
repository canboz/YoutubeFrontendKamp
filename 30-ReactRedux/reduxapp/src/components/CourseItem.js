import React from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../control/cartSlice';

function CourseItem({ id, title, price, img, quantity }) {
  //   console.log(title);
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img src={img} alt="" />
      <div className="cartInfo">
        <h4>{title}</h4>
        <h4>{price}TL</h4>
        <div>
          <button
            onClick={() => {
              dispatch(increase(id));
            }}
            className="cartQuantityButton"
          >
            <BsChevronUp />
          </button>
          <p className="cartQuantity">{quantity}</p>
          <button
            onClick={() => {
              dispatch(decrease(id));
            }}
            className="cartQuantityButton"
          >
            <BsChevronDown />
          </button>
        </div>
        <button
          className="cartDeleteButton"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
