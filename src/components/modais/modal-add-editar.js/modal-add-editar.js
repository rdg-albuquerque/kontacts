import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import closeButton from "../../../assets/close-button.svg";
import useContatos from "../../../hooks/useContatos";
import useRequests from "../../../hooks/useRequests";
import { ButtonBlue, ButtonRed } from "../../CustomButton/CustomButton";
import { CustomInput, MaskedInput } from "../../CustomInput/CustomInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  display: "flex",
  flexDirection: "column",
  "@media only screen and (max-width: 440px)": {
    width: "90%",
  },
};

export default function ModalAddEdit() {
  const {
    modalAddEdit,
    setModalAddEdit,
    contato,
    setContato,
    contatoSelecionado,
    setContatoSelecionado,
  } = useContatos();
  const { postContato, putContato } = useRequests();

  const initialErroInput = {
    nome: false,
    email: false,
    telefone: false,
  };
  const [erroInput, setErroInput] = useState(initialErroInput);

  const initialContato = {
    nome: "",
    email: "",
    telefone: "",
  };

  let [modalAtual, setModalAtual] = useState();

  useEffect(() => {
    if (contatoSelecionado.nome) {
      // Se contato selecionado existe, é pq o botão de editar foi clicado. Então os valores dos inputs serão inicialmente os dados do usuário cujo botão editar foi clicado
      setModalAtual("Editar");
      setContato({
        nome: contatoSelecionado.nome,
        email: contatoSelecionado.email,
        telefone: contatoSelecionado.telefone,
      });
    } else setModalAtual("Adicionar");
    // eslint-disable-next-line
  }, []);

  function handleClose() {
    setModalAddEdit(false);
    setContatoSelecionado({});
    setContato(initialContato);
  }

  async function handleClick() {
    setErroInput(initialErroInput);
    if (!contato.nome) return setErroInput({ ...initialErroInput, nome: true });
    if (!contato.email)
      return setErroInput({ ...initialErroInput, email: true });
    if (!contato.telefone || contato.telefone.length < 11)
      return setErroInput({ ...initialErroInput, telefone: true });

    if (modalAtual === "Adicionar") {
      postContato();
    } else {
      putContato(contatoSelecionado.id);
    }
    handleClose();
  }

  return (
    <div>
      <Modal
        open={modalAddEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            className="modal-close-button"
            src={closeButton}
            alt="fechar"
            style={{
              position: "absolute",
              right: 20,
              top: 20,
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "bold",
              alignSelf: "center",
              mb: "40px",
              fontSize: "2.4rem",
              color: "#414141",
            }}
          >
            {modalAtual === "Adicionar" ? "Novo Contato" : "Editar Contato"}
          </Typography>

          <CustomInput
            className="input-contato-nome"
            placeholder="Nome"
            mb={erroInput.nome ? "30px" : "15px"}
            value={contato.nome}
            onChange={(e) => {
              setContato({ ...contato, nome: e.target.value });
              setErroInput({ ...erroInput, nome: false });
            }}
            error={erroInput.nome}
            helperText={erroInput.nome ? "Campo obrigatório" : ""}
          />

          <CustomInput
            className="input-contato-email"
            placeholder={"Email"}
            mb={erroInput.email ? "30px" : "15px"}
            value={contato.email}
            onChange={(e) => {
              setContato({ ...contato, email: e.target.value });
              setErroInput({ ...erroInput, email: false });
            }}
            error={erroInput.email}
            helperText={erroInput.email ? "Campo obrigatório" : ""}
          />

          <MaskedInput
            className="input-contato-telefone"
            placeholder={"Telefone"}
            type="number"
            mask="(99)9 9999-9999"
            mb="72px"
            value={contato.telefone}
            onChange={(e) => {
              setContato({ ...contato, telefone: e.target.value });
              setErroInput({ ...erroInput, telefone: false });
            }}
            error={erroInput.telefone}
            helperText={
              erroInput.telefone && contato.telefone.length === 0
                ? "Campo obrigatório"
                : erroInput.telefone && contato.telefone.length < 11
                ? "Número inválido"
                : ""
            }
          />

          <ButtonBlue
            className="btn-adicionar-contato"
            variant="contained"
            onClick={handleClick}
          >
            {contatoSelecionado.nome ? "Editar" : "Adicionar"}
          </ButtonBlue>

          <ButtonRed
            className="btn-limpar-inputs-contato"
            variant="contained"
            onClick={() => setContato(initialContato)}
          >
            Limpar
          </ButtonRed>
        </Box>
      </Modal>
    </div>
  );
}
