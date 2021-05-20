import { useState, useEffect } from "react";

import ProductSingleCategory from "../ProductSingleCategory/ProductSingleCategory";
import api from "../../../apis/index";

function Ipad() {
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchWord, setSearchWord] = useState('');
 
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
        let filteredArray = []
        if (products.length!==0 && searchWord.length!==0) {
          filteredArray = products.filter((gadget) =>
          gadget.model.toLowerCase().includes(searchWord.toLowerCase())
        );
      }
      setFilteredProducts([...filteredArray])
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
    <div className="container-fluid" style={{ paddingBottom: "100px"}}>
      <div className="form-group mb-4 ">
          <label htmlFor="searchWord"><h6 className="text-secondary" >SEARCH</h6></label>
          <input
            type="text"
            className="w-25 form-control shadow-none no-border"
            id="searchWord"
            name="searchWord"
            onChange={handleChange}
            value={searchWord}
          />
        </div>
        
        {searchWord && <div className="container-fluid">
        {/* New Watch List */}
        <ProductSingleCategory
          listTitle="Search Result"
          contentList={filteredProducts}
        />
      </div>}
    <div className="">
      {/* Watch List */}
      <ProductSingleCategory
        listTitle="WATCHES"
        contentList={products.filter(
          (product) => product.category === "watch")}
      />
    </div>
    </div>
  );
}

export default Ipad;
