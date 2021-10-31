import sair from '../../assets/sair.svg'
import './style.css'
import { useHistory } from "react-router"
import useContatos from "../../hooks/useContatos"

export default function Header() {
    const { removeUser } = useContatos()
    const history = useHistory()
    return (
        <header className="header">
            <div></div>
            <h1 className="header_titulo">KONTACTS</h1>
            <img
                className="btn-sair"
                src={sair}
                alt="sair"
                onClick={() => {
                    removeUser()
                    history.push('/login')
                }}
            />
        </header>
    )
}