import { useState, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
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
      <div className="container-fluid movie-app">
        {/* Series found List */}
        <ProductList
          listTitle="Used Iphones"
          contentList={products.filter((product)=>product.category==="mobile"&&product.condition==="USED")}
        />
      </div>
    </div>
  );

  // return (
  //   <div className="row">
  //     {products.map((product) => {
  //       return (
  //         <div key={product._id} className="col-12 col-sm-4 col-md-3">
  //           <ProductCard product={product} />
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default ProductFeed;
