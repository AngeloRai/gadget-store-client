import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <Link
      className="text-decoration-none"
      key={props.product._id}
      to={`/product/${props.product._id}`}
    >
      <div
        className="card card-fixed-height text-dark rounded border-0 m-2 mx-auto"
        style={{ width: "100%" }}
      >
        <div className="card-img-container d-flex justify-content-center align-items-center">
          <img
            className="card-img product-img"
            src={props.product.image_url[0]}
            alt="product"
<<<<<<< HEAD
=======
            
>>>>>>> 73491dc3be384a6992c498081571dd45018580d4
          />
        </div>

        <div className="card-body" style={{ padding: '10px' }}>

          <div className='d-flex justify-content-center badgets-fixed-height mb-3'>
            {props.product.condition==="NEW" ? <span className="badge bg-success text-white mx-1" style={{fontSize: "10px"}}>NEW</span> : <span className="badge bg-primary text-white mx-1" style={{fontSize: "10px"}}>USED</span>}
            {props.product.discount ? <span className="badge bg-danger text-white justify-content-evenly mx-1" style={{fontSize: "10px"}}>{props.product.discount}%</span> : null
            }
          </div>

          <h5
            title={props.product.model}
            className="card-title card-title-fixed-height text-center"
          >
            <small>{props.product.model}</small>
          </h5>
         



          <div className='original-price-fixed-height text-center'>
            {props.product.discount ? <span className="card-text" style={{fontSize: '10px', textDecoration: "line-through", color: "darkgray"}}>
              {Number(props.product.price).toLocaleString(
                "pt-BR",
                { style: "currency", currency: "BRL" }
              )}
            </span> : <span className="card-text text-center" style={{fontSize: '10px', textDecoration: "line-through", color: "white"}}>|</span>}
          </div>
          {props.product.discount ? 
          <h5 className="card-text price text-center">
            {Number((props.product.price * (100-props.product.discount))/100).toLocaleString(
              "pt-BR",
              { style: "currency", currency: "BRL" }
            )}
          </h5> : 
          <h5 className="card-text price text-center">
          {Number(props.product.price ).toLocaleString(
          "pt-BR",
            { style: "currency", currency: "BRL" }
          )}
        </h5>}





        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
