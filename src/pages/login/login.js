import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonGreen } from '../../components/CustomButton/CustomButton';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import useContatos from '../../hooks/useContatos';
import { alertaErro } from '../../utils/toast';
import './style.css';



export default function Login() {
    const { inputLogin, setInputLogin, setToken, setUser, setListaContatos } = useContatos()
    const history = useHistory()

    async function handleLogin() {
        if (!inputLogin.email || !inputLogin.senha) return
        const response = await fetch('https://cubos-api-contacts.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputLogin)
        })
        if (response.status !== 200) {
            return alertaErro("E-mail ou senha incorretos")
        }
        const data = await response.json()

        const { email, ...dadosUsuario } = data.usuario //Retirando e-mail dos dados da req

        const localUser = { token: data.token, usuario: dadosUsuario }
        setListaContatos([])
        setUser(localUser)
        setToken(data.token)
        history.push('/')
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
                        variant="outlined"
                        placeholder={'Email'}
                        onChange={(e) => {
                            setInputLogin({ ...inputLogin, email: e.target.value })
                        }
                        }
                    />
                    <CustomInput
                        className="input-login-senha"
                        value={inputLogin.senha}
                        variant="outlined"
                        type="password"
                        placeholder={'Senha'}
                        sx={{ mb: "50px" }}
                        onChange={(e) => {
                            setInputLogin({ ...inputLogin, senha: e.target.value })
                        }
                        }
                    />
                    <ButtonGreen className="btn-logar" sx={{ mb: "96px" }} variant="contained" onClick={handleLogin}>Login</ButtonGreen>
                    <span className="link-cadastro">Não tem cadastro ? <Link to="/cadastro">Cadastre-se</Link></span>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}