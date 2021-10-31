import { useContext } from "react";
import contatosContext from "../contexts/contatos";

function useContatos() {
    return useContext(contatosContext)
}

export default useContatos