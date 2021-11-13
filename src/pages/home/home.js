import { ToastContainer } from "react-toastify";
import { ButtonGreen } from "../../components/CustomButton/CustomButton";
import Header from "../../components/Header/Header";
import ModalAddEdit from "../../components/modais/modal-add-editar.js/modal-add-editar";
import ModalExcluir from "../../components/modais/modal-excluir/modal-excluir";
import Tabela from "../../components/tabela/tabela";
import useContatos from "../../hooks/useContatos";
import "./style.css";

export default function Home() {
  const { setModalAddEdit, modalAddEdit, modalExcluir } = useContatos();

  return (
    <div className="home">
      <Header />
      <section className="section">
        <div className="home-container">
          <ButtonGreen
            className="btn-adicionar-contato"
            sx={{ mb: "3.2rem", width: "23rem" }}
            variant="contained"
            onClick={() => setModalAddEdit(true)}
          >
            Adicionar
          </ButtonGreen>
          <Tabela />
          {modalAddEdit && <ModalAddEdit />}
          {modalExcluir && <ModalExcluir />}
          <ToastContainer />
        </div>
      </section>
    </div>
  );
}
