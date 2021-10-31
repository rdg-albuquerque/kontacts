import useContatosProvider from "../hooks/useContatosProvider";
import contatosContext from "./contatos";

export default function ContatosProvider({ children }) {
    const values = useContatosProvider()
    return (
        <contatosContext.Provider value={values}>
            {children}
        </contatosContext.Provider>
    )
}