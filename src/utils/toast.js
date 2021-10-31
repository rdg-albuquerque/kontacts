import { toast } from 'react-toastify';

function alertaErro(mensagem) {
    toast.error(mensagem, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
}

function alertaInfo(mensagem) {
    toast.info(mensagem, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

function alertaSucesso(mensagem) {
    toast.success(mensagem, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export {
    alertaErro,
    alertaInfo,
    alertaSucesso
}