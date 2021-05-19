import { useState, useEffect } from "react";

import ProductList from "../../../components/ProductList/ProductList";
import api from "../../../apis/index";
import './Home.css'

function ProductFeed() {
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
    <div className="container-fluid" style={{ paddingBottom: "100px" }}>
      {/* Contains all the lists shown in the home-screen */}

      {/* New iphones List */}
      {/* <ProductList
        listTitle="New Iphones"
        contentList={products.filter((product) => product.category === "mobile" && product.condition === "NEW")}
      /> */}

      {/* Used iphones List */}
      {/* <ProductList
        listTitle="Used Iphones"
        contentList={products.filter((product) => product.category === "mobile" && product.condition === "USED")}
      /> */}
      <ProductList
        listTitle="ALL PRODUCTS"
        contentList={products}
      />
    </div>
  );
}

export default ProductFeed;
