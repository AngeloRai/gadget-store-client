import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Cart.css";

import { CartContext } from "../contexts/cartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <NavLink to="/checkout" title="Shopping cart">
      <div className="cart-link text-white d-flex align-items-center mt-2">
        <i className="bi bi-cart-fill h4"></i>
        {cart.length > 0 ? (
          <span className="badge badge-danger position-absolute ml-3 mb-3">
            {cart.length}
          </span>
        ) : null}
      </div>
    </NavLink>
  );
}

export default Cart;
