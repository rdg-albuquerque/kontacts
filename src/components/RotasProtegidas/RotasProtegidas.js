import { Route, Redirect } from "react-router-dom";
import useContatos from "../../hooks/useContatos";

export default function RotasProtegidas({ children }) {
    const { token } = useContatos()
    return (
        <Route>
            {token ? children : <Redirect to="/login" />}
        </Route>
    )
}