// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import * as Yup from "yup";

// import api from "../../apis/index";

// import ProductForm from "./ProductForm";


// const SignupSchema = Yup.object().shape({
//   category: Yup.string().required("Required field").max(30, "Category should be 30 characters max"),
//   model: Yup.string().required("Required field").max(30, "Model should be 30 characters max"),
//   brand: Yup.string().required("Required field").max(30, "Brand should be 30 characters max"),
//   cost: Yup.number().required("Required field"),
//   price: Yup.number().required("Required field"),
//   discount: Yup.number().required("Required field"),
//   description: Yup.string().required("Required field").max(150, "Description should be 150 characters max"),
//   color: Yup.string().required("Required field"),
//   condition: Yup.string().required("Required Field"),
//   image_url: Yup.string(),
//   qtt_in_stock: Yup.number().required("Required field"),
// });

// function ProductCreate() {
//   const history = useHistory();

  
//   function handleChange(event) {
//     if (event.target.files) {
//       setState({ ...state, [event.target.name]: event.target.files[0] });
//     } else {
//       setState({ ...state, [event.target.name]: event.target.value });
//     }
//   }

//   async function handleFileUpload(file) {
//     try {
//       // FormData é uma função construtora global nativa do Javascript que cria um objeto de Formulario no formato multipart/form esperado pelo backend
//       const uploadData = new FormData();

//       // 'image' precisa bater com o valor de uploadCloud.single() no nosso backend
//       uploadData.append("image", file);

//       const response = await api.post("/image-upload", uploadData);

//       return response.data.fileUrl;
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   async function handleSubmit(event) {
//     try {
//       event.preventDefault();

//       let uploadedImageUrl = "";
//       if (state.image_url) {
//         uploadedImageUrl = await handleFileUpload(state.image_url);
//       }

//       await api.post("/product", {
//         ...state,
//         image_url: uploadedImageUrl,
//       });

//       // Redireciona programaticamente para a URL '/'
//       history.push("/");
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
    
//   <Formik
//   initialValues={{
//     category: "",
//     model: "",
//     brand: "",
//     cost: 0,
//     price: 0,
//     discount: "",
//     description: "",
//     color: '',
//     condition: '',
//     image_url: "",
//     qtt_in_stock: 0,
//   }}
//   validationSchema={SignupSchema}
//       onSubmit={async (values, { setSubmitting }) => {
//         setSubmitting(true);
   
//         const {
//           street,
//           neighbourhood,
//           city,
//           postCode,
//           stateOrProvince,
//           country,
//         } = values;

//         try {
//           const response = await api.post("/signup", {
//             ...values,
//             address: {
//               street,
//               neighbourhood,
//               city,
//               postCode,
//               stateOrProvince,
//               country,
//             },
//           });

//           console.log(response);

//           setSubmitting(false);

//           history.push("/login");
//         } catch (err) {
//           console.error(err);
//           setSubmitting(false);
//         }
//       }}


//   </Formik>














//       {/* <h1>New Product </h1>

//       <hr />

//       <ProductForm
//         state={state}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       /> */}
    
//   );
// }

// export default ProductCreate;
