import React from "react";

import ProductCard from "../../../components/ProductCard/ProductCard";

// As a functional component it receives through props the list of the content to be rendered
function ProductSingleCategory(props) {
  if (props.contentList) {
    return (
      <div className="mb-5 flex-column">
        <div className="d-flex-block text-center">
          <h4>{props.listTitle}</h4>
        </div>
        <div className="d-flex flex-wrap">
          {props.contentList.map((product) => {
            return (
              <div key={product._id} style={{ padding: "10px" }}>
                <ProductCard product={product} />
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
