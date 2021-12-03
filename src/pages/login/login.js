import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonBlue } from "../../components/CustomButton/CustomButton";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import useContatos from "../../hooks/useContatos";
import useRequests from "../../hooks/useRequests";
import { alertaErro } from "../../utils/toast";
import "./style.css";

export default function Login() {
  const { setToken, setUser, setListaContatos } = useContatos();
  const { login } = useRequests();
  const history = useHistory();

  const [inputLogin, setInputLogin] = useState({
    email: "",
    senha: "",
    telefone: "",
  });

  async function handleLogin() {
    if (!inputLogin.email || !inputLogin.senha) return;
    try {
      const { data } = await login(inputLogin);

      setListaContatos([]);
      setUser(data);
      setToken(data.token);
      history.push("/");
    } catch (error) {
      console.log(error);
      return alertaErro("E-mail ou senha incorretos");
    }
  }

  return (
    <div className="login">
      <div className="login-left"></div>
      <div className="login-right">
        <div className="login-right-container">
          <span className="login-bemvindo">Bem vindo</span>
          <h1 className="login-titulo">Faça o login com sua conta</h1>

          <CustomInput
            className="input-login-email"
            value={inputLogin.email}
            placeholder="Email"
            onChange={(e) => {
              setInputLogin({ ...inputLogin, email: e.target.value });
            }}
          />
          <CustomInput
            className="input-login-senha"
            value={inputLogin.senha}
            type="password"
            placeholder="Senha"
            mb="5rem"
            onChange={(e) => {
              setInputLogin({ ...inputLogin, senha: e.target.value });
            }}
          />
          <ButtonBlue
            className="btn-logar"
            sx={{ mb: "9.6rem" }}
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </ButtonBlue>
          <span className="link-cadastro">
            Não tem cadastro ? <Link to="/cadastro">Cadastre-se</Link>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
