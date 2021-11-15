import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonGreen } from "../../components/CustomButton/CustomButton";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import useRequests from "../../hooks/useRequests";
import { alertaErro, alertaSucesso } from "../../utils/toast";
import "./style.css";

export default function Cadastro() {
  const [inputCadastro, setInputCadastro] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const { cadastrar } = useRequests();
  const history = useHistory();

  async function handleCadastrar() {
    if (!inputCadastro.nome || !inputCadastro.email || !inputCadastro.senha)
      return;

    try {
      console.log(inputCadastro);
      await cadastrar(inputCadastro);

      alertaSucesso("Cadastrado com sucesso !");
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      alertaErro(error);
    }
  }
  return (
    <div className="cadastro">
      <div className="cadastro-left">
        <div className="cadastro-left-container">
          <h1 className="cadastro-titulo">Cadastre-se</h1>

          <CustomInput
            className="input-nome-email"
            placeholder={"Nome"}
            callback={(e) => {
              setInputCadastro({ ...inputCadastro, nome: e.target.value });
              console.log(inputCadastro);
            }}
          />
          <CustomInput
            className="input-cadastro-email"
            placeholder={"Email"}
            callback={(e) => {
              setInputCadastro({ ...inputCadastro, email: e.target.value });
            }}
          />
          <CustomInput
            className="input-cadastro-senha"
            type="password"
            placeholder={"Senha"}
            sx={{ mb: "50px" }}
            callback={(e) => {
              setInputCadastro({ ...inputCadastro, senha: e.target.value });
            }}
          />
          <ButtonGreen
            className="btn-cadastrar"
            variant="contained"
            sx={{ mb: "96px" }}
            onClick={handleCadastrar}
          >
            Cadastrar
          </ButtonGreen>
          <span className="link-cadastro">
            Já cadastro ? Clique <Link to="/login">aqui</Link>
          </span>
        </div>
      </div>
      <div className="cadastro-right"></div>
      <ToastContainer />
    </div>
  );
}
