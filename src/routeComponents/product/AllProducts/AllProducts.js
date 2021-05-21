import { useState, useEffect } from "react";

import ProductList from "../../../components/ProductList/ProductList";
import api from "../../../apis/index";
import "./AllProducts.css";
import allProducts from "../../../images/allProducts.png"

function ProductFeed() {
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchWord, setSearchWord] = useState("");

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


  useEffect(() => {
    async function fetchProducts() {
      try {
        let filteredArray = [];
        if (products.length !== 0 && searchWord.length !== 0) {
          filteredArray = products.filter((gadget) =>
            gadget.model.toLowerCase().includes(searchWord.toLowerCase())
          );
        }
        setFilteredProducts([...filteredArray]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, [products, searchWord]);

  function handleChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <>
      <img src={allProducts} className='img-fluid w-100' style={{ opacity: 0.9 }} alt='all products' />
      <div className="container mt-5" style={{ minHeight: "calc(100vh - 235px)" }}>
        <div className="container-fluid" style={{ paddingBottom: "100px" }}>
          <div className="form-group mb-4 d-flex justify-content-center">
            <input
              placeholder="SEARCH"
              type="text"
              className="w-50 form-control shadow-none no-border"
              id="searchWord"
              name="searchWord"
              onChange={handleChange}
              value={searchWord}
            />
          </div>

          {searchWord && <div className="container-fluid">
            {/* New iphones List */}
            <ProductList
              listTitle="SEARCH RESULTS"
              contentList={filteredProducts}
            />
          </div>}

          {/* Contains all the lists shown in the home-screen */}
          <div className="container-fluid">
            {/* New iphones List */}
            <ProductList
              listTitle="NEW IPHONES"
              contentList={products.filter(
                (product) =>
                  product.category === "mobile" && product.condition === "NEW"
              )}
            />
          </div>
          {/* Used iphones List */}
          <ProductList
            listTitle="USED IPHONES"
            contentList={products.filter(
              (product) =>
                product.category === "mobile" && product.condition === "USED"
            )}
          />
          <ProductList listTitle="ALL PRODUCTS" contentList={products} />
        </div>
      </div>
      {/* Contains all the lists shown in the home-screen */}
        <div className="container-fluid">
          {/* New all product List */}
          <ProductList
            listTitle="NEW IPHONES"
            contentList={products.filter(
              (product) =>
                product.category === "mobile" && product.condition === "NEW"
            )}
          />
        </div>
    </>
  );
}

export default ProductFeed;
