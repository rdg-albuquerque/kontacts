import { useHistory } from "react-router"
import { alertaInfo } from "../utils/toast"
import useContatos from "./useContatos"
import { alertaErro, alertaSucesso } from '../utils/toast';

export default function useRequests() {
    const { token, setListaContatos, contato } = useContatos()
    const history = useHistory()

    async function getContatos() {
        try {
            const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            if (data === 'jwt expired') {
                history.push('/login')
                alertaInfo('Sua sessão expirou')
            }
            const contatosOrdenados = data.sort((a, b) => a.id - b.id)
            setListaContatos(contatosOrdenados)
        } catch (error) {
            console.log(error)
        }
    }

    async function postContato() {
        try {
            const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(contato)
            })
            if (response.status !== 200) {
                alertaErro("Algo de errado aconteceu :(")
            }
            else {
                alertaSucesso("Contato cadastrado !")
                getContatos()
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function putContato(id) {
        try {
            const response = await fetch(`https://cubos-api-contacts.herokuapp.com/contatos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(contato)
            })
            if (response.status !== 200) {
                alertaErro("Algo de errado aconteceu :(")
            }
            else {
                alertaSucesso("Contato atualizado !")
                getContatos()
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteContato(id) {
        try {
            const response = await fetch(`https://cubos-api-contacts.herokuapp.com/contatos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const responseMessage = await response.json()
            if (responseMessage === 'Contato excluido com sucesso') alertaSucesso('Contato excluido com sucesso !')
            getContatos()
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getContatos,
        postContato,
        putContato,
        deleteContato
    }
}