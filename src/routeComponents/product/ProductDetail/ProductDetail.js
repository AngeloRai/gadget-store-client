import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductDetail.css"

import api from "../../../apis/index";
import { AuthContext } from "../../../contexts/authContext";
import { CartContext } from "../../../contexts/cartContext";
import ConfirmationModal from "../../../components/ConfirmationModal";

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
    image_url: [],
  });
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Equivalente a usar o props.match.params.id
  const { id } = useParams();
  const history = useHistory();

  const { loggedInUser } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);


  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/product/${id}`);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProduct();
  }, [id]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (

    <div>
      <div className='block mb-2'>
        {loggedInUser.user.role === "ADMIN" ? (
          <div className="row d-flex justify-content-end">
            <Link to={`/product/edit/${id}`} className="btn btn-warning mr-3">
              Edit
            </Link>
            {/* A confirmation Modal pops up before deleting the product */}
            <button className="btn btn-danger mr-4" onClick={() => setShowModal(true)}>
              Delete
            </button>
          </div>
        ) : null}
      </div>

      <div className='row'>
        <div className='col-12 col-sm-6 col-md-6'>
          <Carousel
            renderButtonGroupOutside={true}
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {state.image_url.map((url) => {
              return (<div key={url} className='d-flex justify-content-center' style={{ padding: "10px" }}><img src={url} className='mx-auto pb-3' style={{height: '350px'}} alt="gadget" /></div>)
            })}
          </Carousel>
        </div>

        <div className="card-body col-12 col-sm-6 col-md-6">
          <h4 className="card-title">
            <small>{state.model}</small>
          </h4>

          <div className='d-flex badgets-fixed-height mb-3'>
            {state.condition==="NEW" ? <span className="badge bg-success text-white mx-1" style={{fontSize: "10px"}}>NEW</span> : <span className="badge bg-primary text-white mx-1" style={{fontSize: "10px"}}>USED</span>}
            {state.discount ? <span className="badge bg-danger text-white justify-content-evenly mx-1" style={{fontSize: "10px"}}>{state.discount}%</span> : null
            }
          </div>

          <p className="card-text mb-0">
            <small><strong>Description:</strong> {state.description}</small>
          </p>

          <p className="card-title">
            <small><strong>Color:</strong> {state.color}</small>
          </p>

          <div className='original-price-fixed-height'>
            {state.discount ? <span className="card-text" style={{ fontSize: '13px', textDecoration: "line-through", color: "darkgray" }}>
              {Number(state.price).toLocaleString(
                window.navigator.languages[0],
                { style: "currency", currency: "BRL" }
              )}
            </span> : null}
          </div>

          {state.discount ?
            <h4 className="card-text">
              {Number((state.price * (100 - state.discount)) / 100).toLocaleString(
                window.navigator.languages[0],
                { style: "currency", currency: "BRL" }
              )}
            </h4> :
            <h4 className="card-text">
              {Number(state.price).toLocaleString(
                window.navigator.languages[0],
                { style: "currency", currency: "BRL" }
              )}
            </h4>}

          <p>
            <small><strong>In stock:</strong> {state.qtt_in_stock} units</small>
          </p>

          <div className="form-group d-inline-block mr-3">
            <label htmlFor="productDetailQuantity"><small><strong>Quantity:</strong></small></label>
            <input
              max={state.qtt_in_stock}
              min={1}
              type="number"
              id="productDetailQuantity"
              className="form-control"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            />
          </div>
          <Link
            className="btn btn-sm btn-primary"
            onClick={() => {
              setCart([...cart, { qtt: quantity, productId: id }]);
              history.push('/checkout')
            }}
          >
            <small>Add to Cart</small>
          </Link>
        </div>
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
  )
}

export default ProductDetails;