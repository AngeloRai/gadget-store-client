import { useState, useEffect } from "react";

import ProductSingleCategory from "../ProductSingleCategory/ProductSingleCategory";
import api from "../../../apis/index";

function Iphone() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/product");

        setProduct([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="">
      {/* iPhone List */}
      <ProductSingleCategory
        listTitle="iPhones"
        contentList={products.filter(
          (product) => product.category === "mobile")}
      />
    </div>
  );
}

export default Iphone;
