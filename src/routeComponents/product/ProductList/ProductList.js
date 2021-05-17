import React from "react";
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'

// As a functional component it receives through props the list of the content to be rendered
function MediasList(props) {
  if (props.contentList.length !== 0) {
    return (
      <>
        <h4>{props.listTitle}</h4>
        <div className="row">
          {props.contentList.map((product) => {
              return (
                <div
                  className="image-container m-3"
                  onClick={() => props.handleShow(product, props.location)}
                  key={product._id}
                >
                  {/* <img
                    src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
                    style={{ height: "200px" }}
                    alt="poster"
                  /> */}
                  <ProductCard product={product}/>
                  <div className="overlay d-flex align-items-center justify-content-center">
                    See details
                  </div>
                </div>
              );
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default MediasList;