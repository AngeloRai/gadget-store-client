import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import ProductList from "../../../components/ProductList/ProductList";
import api from "../../../apis/index";
import './Home.css'
import home7 from "../../../images/home7.png"
import home5 from "../../../images/home5.png"
import home8 from "../../../images/home8.png"


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

      <div className="container-fluid" style={{ paddingBottom: "50px" }}>
        <ProductList
          listTitle="IPHONES"
          contentList={products.filter((product) => product.category === "mobile")}
        />
      </div>
      <img src={home8} className='img-fluid w-100' style={{ opacity: 0.9 }} alt='man holding an iphone' />
      <div className="container-fluid" style={{ paddingBottom: "50px" }}>

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
