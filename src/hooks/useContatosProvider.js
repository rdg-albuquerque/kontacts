import { useState } from "react";
import { useLocalStorage } from 'react-use'


export default function useContatosProvider() {
    const [user, setUser, removeUser] = useLocalStorage('user', {})
    const [token, setToken] = useState(user ? user.token : '');

    const [inputLogin, setInputLogin] = useState({
        email: '',
        senha: ''
    });

    const [inputCadastro, setInputCadastro] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    const [contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: ''
    })

    const [modalAddEdit, setModalAddEdit] = useState(false);

    const [modalExcluir, setModalExcluir] = useState(false)

    const [listaContatos, setListaContatos] = useState([]);

    const [contatoSelecionado, setContatoSelecionado] = useState({})


    return {
        token,
        setToken,
        inputLogin,
        setInputLogin,
        inputCadastro,
        setInputCadastro,
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
        setModalExcluir
    };
};