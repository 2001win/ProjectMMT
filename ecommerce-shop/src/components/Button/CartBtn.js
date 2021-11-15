import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const CartBtn = () => {
  const state = useSelector(state => state.itemReducer.length);

  return (
    <>
      <NavLink to="/cart" className="btn btn-primary ms-2">
        <span className="fas fa-shopping-cart"></span>
        Cart ({state})
      </NavLink>
    </>
  );
};

export default CartBtn;
