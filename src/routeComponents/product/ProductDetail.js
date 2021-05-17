import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import api from "../../apis/index";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";
import ConfirmationModal from "../../components/ConfirmationModal";

function ProductDetails() {
  const [state, setState] = useState({
    category: "",
    model: "",
    brand: "",
    cost: 0,
    price: 0,
    discount: "",
    description: "",
    color: "",
    condition: "",
    qtt_in_stock: 0,
    image_url: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // Equivalente a usar o props.match.params.id
  const { id } = useParams();
  const history = useHistory();

  const { loggedInUser } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await api.get(`/product/${id}`);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchBeer();
  }, [id]);

  return (
    <div>
      {loggedInUser.user.role === "ADMIN" ? (
        <div className="row d-flex justify-content-end">
          <Link to={`/product/edit/${id}`} className="btn btn-warning mr-3">
            Edit
          </Link>
          {/* A confirmation Modal pops up before deleting the product */}
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Delete
          </button>
        </div>
      ) : null}

      <img
        className="card-img product-img mx-auto mt-2"
        src={state.image_url}
        alt="gadget"
      />
      <div className="card-body">
        <h4 className="card-title">
          <small>{state.model}</small>
        </h4>

        <div className='original-price-fixed-height'>
            {state.discount ? <span className="card-text" style={{fontSize: '13px', textDecoration: "line-through", color: "darkgray"}}>
              {Number(state.price).toLocaleString(
                { style: "currency", currency: "BRL" },
                window.navigator.languages[0]
              )}
            </span> : null}
          </div>
        
        {state.discount ? 
          <h4 className="card-text">
            {Number((state.price * (100-state.discount))/100).toLocaleString(
              window.navigator.languages[0],
              { style: "currency", currency: "BRL" }
            )}
          </h4> : 
          <h4 className="card-text">
          {Number(state.price ).toLocaleString(
            window.navigator.languages[0],
            { style: "currency", currency: "BRL" }
          )}
        </h4>}

        <p>
          <small>In stock: {state.qtt_in_stock} units</small>
        </p>

             
        <p className="card-text mb-0">
          <small>{state.description}</small>
        </p>

        
        <div className="form-group d-inline-block mr-3">
          <label htmlFor="productDetailQuantity">Quantity: </label>
          <input
            type="number"
            id="productDetailQuantity"
            className="form-control"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
          />
        </div>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            console.log(cart);
            setCart([...cart, { qtt: quantity, productId: id }]);
          }}
        >
          Add to Cart
        </button>
      </div>

      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={() => history.push(`/product/delete/${id}`)}
        title="Are you sure you want to delete this product?"
      >
        <p>This action is irreversible. To confirm, click "Confirm".</p>
      </ConfirmationModal>
    </div>
  );
}

export default ProductDetails;
