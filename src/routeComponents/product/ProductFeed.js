import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import api from "../../apis/index";

function ProductFeed() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await api.get("/product");

        setBeers([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchBeers();
  }, []);

  return (
    <div className="row">
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="col-12 col-sm-4 col-md-3">
            <ProductCard beer={beer} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductFeed;
