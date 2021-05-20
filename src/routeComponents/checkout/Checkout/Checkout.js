import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { BiTrash } from "react-icons/bi"
import "./Checkout.css"

import { CartContext } from "../../../contexts/cartContext";
import { AuthContext } from "../../../contexts/authContext";

import api from "../../../apis/index.js";

const stripePromise = loadStripe(
  "pk_test_51IsYVoATzq9KAk7iZUS2hY4j12KsV7GK5nLPdtgDuLS4feXBHu0fNFlOsW2BHxMndlRPMhbcUC8YUEk94hP4npqs00D7WvYZji"
);

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const { loggedInUser } = useContext(AuthContext);

  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const tempState = [];

      for (let productInCart of cart) {
        const response = await api.get(`/product/${productInCart.productId}`);

        const selectedQuantity = productInCart.qtt


        tempState.push({ ...response.data, selectedQuantity });
      }

      setState([...tempState]);
    }
    fetchProducts();
  }, [cart]);


  async function handleSubmit() {
    try {
      const stripe = await stripePromise;
      console.log(state)
      // console.log(loggedInUser)
      const data = {
        buyerId: loggedInUser.user._id,
        products: state.map((product) => {
          console.log(product)
          return { productId: product._id, qtt: product.selectedQuantity };
        }),
      };

      console.log(data)

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
      <h4 className='text-secondary text-center mb-3'>ORDER SUMARY</h4>
      <div className="list-group">
        {state.map((product) => {
          return (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="list-group-item list-group-item-action p-2"
            >
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                  <img
                    style={{ height: "170px" }}
                    src={product.image_url[0]}
                    alt={product.name}
                  />
                </div>

                <div className="card-body col-12 col-sm-6 col-md-6 p-3">
                  <h4 className="card-title">
                    <small>{product.model}</small>
                  </h4>

                  <div className='d-flex badgets-fixed-height mb-3'>
                    {product.condition === "NEW" ? <span className="badge bg-success text-white mx-1" style={{ fontSize: "10px" }}>NEW</span> : <span className="badge bg-primary text-white mx-1" style={{ fontSize: "10px" }}>USED</span>}
                    {product.discount ? <span className="badge bg-danger text-white justify-content-evenly mx-1" style={{ fontSize: "10px" }}>{product.discount}%</span> : null
                    }
                  </div>

                  <p className="card-text mb-0">
                    <small><strong>Description:</strong> {product.description}</small>
                  </p>

                  <p className="card-title">
                    <small><strong>Color:</strong> {product.color}</small>
                  </p>

                  <div className='original-price-fixed-height'>
                    {product.discount ? <span className="card-text" style={{ fontSize: '13px', textDecoration: "line-through", color: "darkgray" }}>
                      {Number(product.price).toLocaleString(
                        window.navigator.languages[0],
                        { style: "currency", currency: "BRL" }
                      )}
                    </span> : null}
                  </div>

                  {product.discount ?
                    <h4 className="card-text">
                      {Number((product.price * (100 - product.discount)) / 100).toLocaleString(
                        window.navigator.languages[0],
                        { style: "currency", currency: "BRL" }
                      )}
                    </h4> :
                    <h4 className="card-text">
                      {Number(product.price).toLocaleString(
                        window.navigator.languages[0],
                        { style: "currency", currency: "BRL" }
                      )}
                    </h4>}

                  <p>
                    <small><strong>Selected quantity:</strong> {product.selectedQuantity} units</small>
                  </p>

                  <div className='d-flex justify-content-center'>
                    <button className="btn btn-sm btn-danger" onClick={() => setCart(cart.filter(x => x.productId !== product._id))}>
                      <BiTrash className='size' />
                    </button>
                  </div>

                </div>


              </div>
            </Link>
          );
        })}
        <div className='d-flex justify-content-center'>
          <Link to="/" className="btn btn-primary btn-sm mx-2 mt-3">
            Keep Buying
          </Link>
          <button className="btn btn-success btn-sm mx-2 mt-3" onClick={handleSubmit}>
            Confirm Order
          </button>
        </div>
      </div>
    </div >
  );
}

export default Checkout;
