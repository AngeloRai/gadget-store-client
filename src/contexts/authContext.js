import { useState, createContext, useEffect } from "react";

// Criando um Context, que é um state global (acessível por qualquer componente sem precisar ser passado por props)
const AuthContext = createContext({ user: {}, token: "" });

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({ user: {}, token: "" });

  // Assim que o Componente Provider carregar na tela, busque as informações do usuário logado no localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    const parsedStoredUser = JSON.parse(storedUser || '""');

    // Se existe um usuário logado armazenado no localStorage, atualize o state global
    if (parsedStoredUser.user) {
      setLoggedInUser({ ...parsedStoredUser });
    }
  }, []);

  // O componente Provider serve para disponibilizar o Context (state global) para todos seus componentes filhos
  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextComponent, AuthContext };
