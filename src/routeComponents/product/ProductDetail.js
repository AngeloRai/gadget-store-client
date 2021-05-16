import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import api from "../../apis/index";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";
import ConfirmationModal from "../../components/ConfirmationModal";

function ProductDetails() {
  const [state, setState] = useState({
    image_url: "",
    food_pairing: [],
    _id: "",
    name: "",
    tagline: "",
    first_brewed: "",
    description: "",
    abv: 0,
    contributed_by: "",
    cost: 0,
    price: 0,
    qtt_in_stock: 0,
    volume: 0,
    expire_date: "",
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
          {/* Abrimos um modal de confirmação antes de deletar o produto */}
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Delete
          </button>
        </div>
      ) : null}

      <img
        className="card-img product-img mx-auto mt-2"
        src={state.image_url}
        alt="beer"
      />
      <div className="card-body">
        <h4 className="card-title">
          <small>{state.name}</small>
        </h4>

        <h3 className="card-text">
          {Number(state.price).toLocaleString(window.navigator.languages[0], {
            style: "currency",
            currency: "USD",
          })}
        </h3>

        <p>
          <small>In stock: {state.qtt_in_stock} units</small>
        </p>

        <p className="mb-0">
          <small className="card-text">{state.volume}ml</small>
        </p>

        <p>
          <small>Alcohol by volume: {state.abv}%</small>
        </p>

        <p>
          <small>
            Expire Date: {new Date(state.expire_date).toLocaleString()}
          </small>
        </p>

        <p className="card-text mb-0">
          <small>{state.tagline}</small>
        </p>

        <p className="card-text mb-0">
          <small>{state.description}</small>
        </p>

        <p>
          <strong>Food Pairings</strong>
        </p>
        <ul>
          {state.food_pairing.map((food) => (
            <li key={food}>
              <small>{food}</small>
            </li>
          ))}
        </ul>

        <p className="card-text mb-3">
          <small>
            <strong>Created by:</strong>
            {state.contributed_by ? state.contributed_by.split("<")[0] : ""}
          </small>
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
