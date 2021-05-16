import { useState, useEffect } from "react";

import api from "../../apis/index";

function Profile() {
  const [state, setState] = useState({
    address: {
      street: "",
      neighbourhood: "",
      city: "",
      postCode: "",
      stateOrProvince: "",
      country: "",
    },
    _id: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  // O useEffect é um Hook que executa a sua callback (primeiro parâmetro) toda vez que qualquer coisa na sua array de dependências (segundo parâmetro) sofre qualquer tipo de alteração. Caso a array de dependências esteja vazia, o useEffect roda a callback uma vez assim que o componente renderiza na tela (mesmo efeito do componentDidMount)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/profile");

        console.log(response);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Personal Info</h2>
      <hr />
      <ul>
        <li>
          <strong>Name: </strong>
          {state.name}
        </li>
        <li>
          <strong>E-mail: </strong>
          {state.email}
        </li>
        <li>
          <strong>Phone Number: </strong>
          {state.phoneNumber}
        </li>
      </ul>

      <h2>Address Info</h2>
      <hr />

      <ul>
        <li>
          <strong>Post Code: </strong>
          {state.address.postCode}
        </li>
        <li>
          <strong>Street: </strong>
          {state.address.street}
        </li>
        <li>
          <strong>Neighbourhood: </strong>
          {state.address.neighbourhood}
        </li>
        <li>
          <strong>City: </strong>
          {state.address.city}
        </li>
        <li>
          <strong>State or Province: </strong>
          {state.address.stateOrProvince}
        </li>
        <li>
          <strong>Country: </strong>
          {state.address.country}
        </li>
      </ul>
    </div>
  );
}

export default Profile;
