import { useState } from "react";
import { useLocalStorage } from "react-use";

export default function useContatosProvider() {
  const [user, setUser, removeUser] = useLocalStorage("user", {});
  const [token, setToken] = useState(user ? user.token : "");

  const [contato, setContato] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const [modalAddEdit, setModalAddEdit] = useState(false);

  const [modalExcluir, setModalExcluir] = useState(false);

  const [listaContatos, setListaContatos] = useState([]);

  const [contatoSelecionado, setContatoSelecionado] = useState({});

  return {
    token,
    setToken,
    user,
    setUser,
    removeUser,
    modalAddEdit,
    setModalAddEdit,
    contato,
    setContato,
    listaContatos,
    setListaContatos,
    contatoSelecionado,
    setContatoSelecionado,
    modalExcluir,
    setModalExcluir,
  };
}
