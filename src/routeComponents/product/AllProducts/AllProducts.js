import { useState, useEffect } from "react";

import ProductList from "../ProductList/ProductList";
import api from "../../../apis/index";
import "./AllProducts.css";

function ProductFeed() {
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/product");

        setProduct([...response.data]);
        setFilteredProducts([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      
      try {
        if(products && searchWord){
          const filteredArray = products.filter((gadget) =>
          gadget.model.toLowerCase().includes(searchWord.toLowerCase())
        );
        setFilteredProducts([...filteredArray])}
        
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
    <div className="container-fluid" style={{ paddingBottom: "100px" }}>
      <div className="form-group mb-4">
          <label htmlFor="searchWord">Search</label>
          <input
            type="text"
            className="form-control shadow-none no-border"
            id="searchWord"
            name="searchWord"
            onChange={handleChange}
            value={searchWord}
          />
        </div>
        
        {searchWord && <div className="container-fluid movie-app">
        {/* New iphones List */}
        <ProductList
          listTitle="Search Result"
          contentList={filteredProducts}
        />
      </div>}

      {/* Contains all the lists shown in the home-screen */}
      <div className="container-fluid movie-app">
        {/* New iphones List */}
        <ProductList
          listTitle="New Iphones"
          contentList={products.filter(
            (product) =>
              product.category === "mobile" && product.condition === "NEW"
          )}
        />
      </div>
      {/* Used iphones List */}
      <ProductList
        listTitle="Used Iphones"
        contentList={products.filter(
          (product) =>
            product.category === "mobile" && product.condition === "USED"
        )}
      />
      <ProductList listTitle="All Products" contentList={products} />
    </div>
  );
}

export default ProductFeed;
