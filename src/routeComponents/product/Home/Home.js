import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import ProductList from "../../../components/ProductList/ProductList";
import api from "../../../apis/index";
import './Home.css'
import home7 from "../../../images/home7.png"
import home5 from "../../../images/home5.png"


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
    <>
      <Link to="/iphone">
        <img src={home5} className='img-fluid mb-4 w-100' style={{ opacity: 0.9 }} alt='man holding an iphone' />
      </Link>

      <div className="container-fluid" style={{ paddingBottom: "100px" }}>
        {/* Contains all the lists shown in the home-screen */}

        {/* New iphones List */}
        {/* <ProductList
          listTitle="IPHONES"
          contentList={products.filter((product) => product.category === "mobile")}
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
      <img src={home7} className='img-fluid w-100' style={{ opacity: 0.9 }} alt='man holding an iphone' />
    </>
  );
}

export default ProductFeed;
