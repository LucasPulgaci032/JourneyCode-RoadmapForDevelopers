import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FormLogin } from "./LoginComponents/FormLogin";
import { Header } from "./LoginComponents/Header";
import { InputLogin } from "./LoginComponents/InputLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "../../Provider/ContextProvider";
import { WarningModal } from "./LoginComponents/WarningModal";

export function RegisterPage() {
  const { modal, setModal } = useContext(ThemeProvider);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post(`http://localhost:3000/users/register`, {
        name,
        email,
        password,
      });
        localStorage.setItem("token", token);
       
      navigate("/roadmaps");
    } catch (error) {
      setModal(error.response.data.message);
    }
  };

  return (
    <section className="flex flex-col text-center gap-10 p-20 ">
      <FormLogin onSubmit={register}>
        <Header />
        <InputLogin
          type="text"
          placeholder="insira seu nome de usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputLogin
          type="email"
          placeholder="insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputLogin
          type="password"
          placeholder="insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="self-start font-bold hover:scale-110 transition-transform duration-200"
          type="submit"
        >
          Cadastrar
        </button>
        <Link
          className="self-start font-bold hover:scale-110 transition-transform duration-200"
          to={"/"}
        >
          Já possui cadastro ? Login
        </Link>
      </FormLogin>
      {modal && (
        <WarningModal onClose={() => setModal(null)}>{modal}</WarningModal>
      )}
    </section>
  );
}
