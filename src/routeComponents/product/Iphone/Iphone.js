import { useState, useEffect } from "react";

import ProductSingleCategory from "../ProductSingleCategory/ProductSingleCategory";
import api from "../../../apis/index";
import iphone from "../../../images/iphone.png"

function Iphone() {
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
        if (products.length !== 0 && searchWord.length !== 0) {
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
    <>
      <img src={iphone} className='img-fluid w-100' style={{ opacity: 0.9 }} alt='man holding an iphone' />
      <div className="container mt-5" style={{ minHeight: "calc(100vh - 265px)" }}>
        <div className="container-fluid" style={{ paddingBottom: "100px" }}>
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
            {/* New iphones List */}
            <ProductSingleCategory
              listTitle="Search Result"
              contentList={filteredProducts}
            />
          </div>}
          <div className="">
            {/* iPhone List */}
            <ProductSingleCategory
              listTitle=""
              contentList={products.filter(
                (product) => product.category === "mobile")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Iphone;
