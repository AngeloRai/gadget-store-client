import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../apis/index";

import ProductForm from "./ProductForm";

function ProductCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    category: "",
    model: "",
    brand: "",
    cost: 0,
    price: 0,
    discount: "",
    description: "",
    color: "",
    condition: "",
    qtt_in_stock: 0,
    image_url: "",
  });

  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  }

  async function handleFileUpload(file) {
    try {
      // FormData is a native Javasccript constructor function which creates a Form object in the multipart/form format expected in the backend
      const uploadData = new FormData();

      // 'image' needs to match same value of uploadCloud.single() in the backend
      uploadData.append("image", file);

      const response = await api.post("/image-upload", uploadData);

      return response.data.fileUrl;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      let uploadedImageUrl = "";
      if (state.image_url) {
        uploadedImageUrl = await handleFileUpload(state.image_url);
      }

      const response = await api.post("/product", {
        ...state,
        image_url: uploadedImageUrl,
      });

      // Programmatically redirects to URL '/'
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>New Gadget </h1>

      <hr />

      <ProductForm
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ProductCreate;
