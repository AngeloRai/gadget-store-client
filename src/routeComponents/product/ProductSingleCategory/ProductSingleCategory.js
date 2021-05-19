import React from "react";
import './ProductSingleCategory.css'
import ProductCardCategory from "../../../components/ProductCardCategory/ProductCardCategory";

// As a functional component it receives through props the list of the content to be rendered
function ProductSingleCategory(props) {
  if (props.contentList) {
    return (
      <div className=" mb-5 flex-column">
        <div className="d-flex-block text-center text-secondary mb-5">
          <h2>{props.listTitle.toUpperCase()}</h2>
        </div>
        <div className="row">
          {props.contentList.map((product) => {
            return (
              <div className="card-container col-12 col-sm-6 col-md-6 col-lg-4" key={product._id} style={{ padding: "10px" }}>
                <ProductCardCategory product={product} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ProductSingleCategory;
