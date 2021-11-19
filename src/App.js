import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import RotasProtegidas from "./components/RotasProtegidas/RotasProtegidas";
import ContatosProvider from "./contexts/contatosProvider";
import RequestsProvider from "./contexts/requestsProvider";
import Cadastro from "./pages/cadastro/cadastro";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

function App() {
  return (
    <div className="app">
      <ContatosProvider>
        <RequestsProvider>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/cadastro" component={Cadastro} />
              <RotasProtegidas>
                <Route path="/" exact component={Home} />
              </RotasProtegidas>
            </Switch>
          </Router>
        </RequestsProvider>
      </ContatosProvider>
    </div>
  );
}

export default App;
