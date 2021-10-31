import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from 'react';
import closeButton from '../../../assets/close-button.svg';
import useContatos from '../../../hooks/useContatos';
import useRequests from '../../../hooks/useRequests';
import { ButtonGreen, ButtonRed } from '../../CustomButton/CustomButton';
import { CustomInput } from '../../CustomInput/CustomInput';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
};

export default function ModalAddEdit() {
    const { modalAddEdit, setModalAddEdit, contato, setContato, contatoSelecionado, setContatoSelecionado } = useContatos()
    const { postContato, putContato } = useRequests()

    const initialErroInput = {
        nome: false,
        email: false,
        telefone: false
    }
    const [erroInput, setErroInput] = useState(initialErroInput)

    const initialContato = {
        nome: '',
        email: '',
        telefone: ''
    }

    let [modalAtual, setModalAtual] = useState()

    useEffect(() => {
        if (contatoSelecionado.nome) { // Se contato selecionado existe, é pq o botão de editar foi clicado. Então os valores dos inputs serão inicialmente os dados do usuário cujo botão editar foi clicado
            setModalAtual("Editar")
            setContato({
                nome: contatoSelecionado.nome,
                email: contatoSelecionado.email,
                telefone: contatoSelecionado.telefone
            })
        }
        else setModalAtual("Adicionar")
    }, [])

    function handleClose() {
        setModalAddEdit(false)
        setContatoSelecionado({})
        setContato(initialContato)
    }

    async function handleClick() {
        setErroInput(initialErroInput)
        if (!contato.nome) return setErroInput({ ...initialErroInput, nome: true })
        if (!contato.email) return setErroInput({ ...initialErroInput, email: true })
        if (!contato.telefone) return setErroInput({ ...initialErroInput, telefone: true })

        if (modalAtual === "Adicionar") {
            postContato()
        }

        else {
            putContato(contatoSelecionado.id)
        }
        handleClose()

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
                    <img className="modal-close-button"
                        src={closeButton}
                        alt="fechar"
                        style={{
                            position: "absolute",
                            right: 20,
                            top: 20,
                            cursor: "pointer"

                        }}
                        onClick={handleClose}
                    />
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "bold", alignSelf: "center", mb: "40px" }}>
                        {modalAtual === "Adicionar" ? "Novo Contato" : "Editar Contato"}
                    </Typography>
                    <CustomInput
                        className="input-contato-nome"
                        variant="outlined"
                        placeholder={'Nome'}
                        sx={erroInput.nome ? { mb: '30px' } : { mb: '15px' }}
                        value={contato.nome}
                        onChange={(e) => {
                            setContato({ ...contato, nome: e.target.value })
                            setErroInput({ ...erroInput, nome: false })
                        }}
                        error={erroInput.nome}
                        helperText={erroInput.nome ? "Campo obrigatório" : ''}
                    />
                    <CustomInput
                        className="input-contato-email"
                        variant="outlined"
                        placeholder={'Email'}
                        sx={erroInput.email ? { mb: '30px' } : { mb: '15px' }}
                        value={contato.email}
                        onChange={(e) => {
                            setContato({ ...contato, email: e.target.value })
                            setErroInput({ ...erroInput, email: false })
                        }}
                        error={erroInput.email}
                        helperText={erroInput.email ? "Campo obrigatório" : ''}

                    />
                    <CustomInput
                        className="input-contato-telefone"
                        variant="outlined"
                        placeholder={'Telefone'}
                        type="number"
                        sx={{ mb: "72px" }}
                        value={contato.telefone}
                        onChange={(e) => {
                            setContato({ ...contato, telefone: e.target.value })
                            setErroInput({ ...erroInput, telefone: false })
                        }}
                        error={erroInput.telefone}
                        helperText={erroInput.telefone ? "Campo obrigatório" : ''}

                    />
                    <ButtonGreen
                        className="btn-adicionar-contato"
                        variant="contained"
                        onClick={handleClick}
                    >
                        Adicionar
                    </ButtonGreen>

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
