import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Cart.css";
import {GiShoppingCart} from "react-icons/gi"
import { RiShoppingCartLine } from "react-icons/ri";

import { CartContext } from "../../contexts/cartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <NavLink to="/checkout" title="Shopping cart">
      <div className="cart-link text-white d-flex align-items-center mt-2">
      <GiShoppingCart className="h1 mx-1 text-white" />
             {cart.length > 0 ? (
          <span className="badge badge-danger position-absolute ml-4 mb-5">
            {cart.length}
          </span>
        ) : null}
      </div>
    </NavLink>
  );
}

export default Cart;
