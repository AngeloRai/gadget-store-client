import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../../apis/index";

function ProductDelete() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function deleteProduct() {
      try {
        const response = await api.delete(`/product/${id}`);

        history.push("/");
      } catch (err) {
        console.error(err);
      }
    }
    deleteProduct();
  }, [id, history]);

  return <p>Deleting...</p>;
}

export default ProductDelete;
