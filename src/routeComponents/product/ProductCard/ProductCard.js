import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <Link
      className="text-decoration-none "
      key={props.product._id}
      to={`/product/${props.product._id}`}
    >
      <div
        className="card card-fixed-height text-dark rounded border-0 m-2"
        style={{ width: "100%" }}
      >
        <div className="card-img-container d-flex justify-content-center align-items-center">
          <img
            className="card-img product-img"
            src={props.product.image_url[0]}
            alt="product"
          />
        </div>

        <div className="card-body" style={{ padding: '10px' }}>

          <div className='d-flex badgets-fixed-height mb-3'>
            {props.product.condition==="NEW" ? <h6><span className="badge bg-success text-white mr-3">NEW</span></h6> : <h6><span class="badge bg-primary text-white mr-3">USED</span></h6>}
            {props.product.discount ? <h6><span class="badge bg-danger text-white">{props.product.discount}%</span></h6> : null
            }
          </div>

          <h5
            title={props.product.model}
            className="card-title card-title-fixed-height text-truncate"
          >
            <small>{props.product.model}</small>
          </h5>

          <div className='original-price-fixed-height'>
            {props.product.discount ? <span className="card-text" style={{fontSize: '10px', textDecoration: "line-through", color: "darkgray"}}>
              {Number(props.product.price).toLocaleString(
                window.navigator.languages[0],
                { style: "currency", currency: "BRL" }
              )}
            </span> : null}
          </div>
          
          {props.product.discount ? 
          <h5 className="card-text">
            {Number((props.product.price * (100-props.product.discount))/100).toLocaleString(
              window.navigator.languages[0],
              { style: "currency", currency: "BRL" }
            )}
          </h5> : 
          <h5 className="card-text">
          {Number(props.product.price ).toLocaleString(
            window.navigator.languages[0],
            { style: "currency", currency: "BRL" }
          )}
        </h5>}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
