import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import closeButton from '../../../assets/close-button.svg';
import useContatos from '../../../hooks/useContatos';
import useRequests from '../../../hooks/useRequests';
import { ButtonGreen, ButtonRed } from '../../CustomButton/CustomButton';

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

export default function ModalExcluir() {
    const { contatoSelecionado, setContatoSelecionado, modalExcluir, setModalExcluir } = useContatos()
    const { deleteContato } = useRequests()

    function handleClose() {
        setModalExcluir(false)
        setContatoSelecionado({})
    }

    async function handleConfirmarExclusao(id) {
        deleteContato(id)
        setModalExcluir(false)
    }
    return (
        <div>
            <Modal
                open={modalExcluir}
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
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "bold", alignSelf: "center", mb: "10px" }}>
                        Tem certeza ?
                    </Typography>

                    <Typography id="modal-modal-subtitle" variant="body1" component="h2" sx={{ alignSelf: "center", mb: "40px" }}>
                        {`Excluir ${contatoSelecionado.nome} ?`}
                    </Typography>

                    <ButtonGreen
                        className="btn-adicionar-contato"
                        variant="contained"
                        onClick={() => handleConfirmarExclusao(contatoSelecionado.id)}
                    >
                        Excluir
                    </ButtonGreen>

                    <ButtonRed
                        className="btn-limpar-inputs-contato"
                        variant="contained"
                        onClick={handleClose}
                    >
                        Cancelar
                    </ButtonRed>

                </Box>

            </Modal>
            <ToastContainer />
        </div>
    );
}
