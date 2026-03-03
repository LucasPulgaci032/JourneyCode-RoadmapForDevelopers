import { useContext, useState } from "react";
import { ButtonLogin } from "./LoginComponents/ButtonLogin";
import { FormLogin } from "./LoginComponents/FormLogin";
import { Header } from "./LoginComponents/Header";
import { InputLogin } from "./LoginComponents/InputLogin";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeProvider } from "../../Provider/ContextProvider";
import { WarningModal } from "./LoginComponents/WarningModal";

export function LoginPage() {
  const { email, setEmail, password, setPassword, modal, setModal } =
    useContext(ThemeProvider);

  const navigate = useNavigate();

  const sendLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/users/login`, {
        email,
        password,
      });
      if (res.status === 200) {
        const token = res.data.token;

        localStorage.setItem("token", token);

        navigate("/roadmaps");
      }
    } catch (error) {
      setModal(error.response.data.message);
    }
  };

  return (
    <section className="flex flex-col text-center gap-10 p-20 ">
      <FormLogin onSubmit={sendLogin}>
        <Header />
        <InputLogin
          type="text"
          placeholder="insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLogin
          type="password"
          placeholder="insira sua senha"
          value={password}
          onChange={(p) => setPassword(p.target.value)}
        />

        <ButtonLogin type="submit" className='self-start font-bold text-blue-300 hover:scale-110 transition-transform duration-200'>Fazer Login</ButtonLogin>
        <Link className="self-start font-bold text-blue-300 hover:transition-transform duration-200" to={"/register"}>
          Não tem cadastro? inscreva-se
        </Link>
      </FormLogin>
      {modal && (
        <WarningModal onClose={() => setModal(null)}>{modal}</WarningModal>
      )}
    </section>
  );
}

