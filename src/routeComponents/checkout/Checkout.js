import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { CartContext } from "../../contexts/cartContext";
import { AuthContext } from "../../contexts/authContext";

import api from "../../apis/index.js";

const stripePromise = loadStripe(
  "pk_test_51IpY5SBtp8twNsKT2ZuHjMRH7Ne40Nkynv7VNRnQINOnkj3N0id7sLRczvclo3krC056AfwOAOLPXuqti5vJL3JI00G0GBEzB7"
);

function Checkout() {
  const { cart } = useContext(CartContext);
  const { loggedInUser } = useContext(AuthContext);

  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const tempState = [];

      for (let productInCart of cart) {
        const response = await api.get(`/product/${productInCart.productId}`);

        const { _id, image_url, price, name } = response.data;

        tempState.push({ _id, image_url, price, name, qtt: productInCart.qtt });
      }

      setState([...tempState]);
    }
    fetchProducts();
  }, [cart]);

  console.log(cart);

  async function handleSubmit() {
    try {
      const stripe = await stripePromise;

      const data = {
        buyerId: loggedInUser.user._id,
        products: state.map((product) => {
          return { productId: product._id, qtt: product.qtt };
        }),
      };

      const response = await api.post("/create-checkout-session", data);

      localStorage.setItem("cart", JSON.stringify(cart));

      // Redirecionar o comprador pra página de pagamento do Stripe
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="m-5">
      <h1 className="mb-2">Order Summary</h1>
      <div className="list-group">
        {state.map((product) => {
          return (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between row">
                <div className="col-4">
                  <img
                    className="mw-100"
                    src={product.image_url}
                    alt={product.name}
                  />
                </div>

                <div className="col-8">
                  <h5 className="mb-1">{product.name}</h5>
                  <h3>
                    {product.price.toLocaleString(
                      window.navigator.languages[0],
                      { style: "currency", currency: "USD" }
                    )}
                  </h3>
                  <small>Quantity: {product.qtt}</small>
                </div>
              </div>
            </Link>
          );
        })}

        <button className="btn btn-primary btn-lg mt-3" onClick={handleSubmit}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
