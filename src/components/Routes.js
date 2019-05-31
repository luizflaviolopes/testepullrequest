import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated, logout } from "../Services/Auth";
import Login from "./Login";
import { Unidades } from "./Unidades";
import DynamicSelector from "./DynamicSelector";
import { TesteLogin } from "./TesteLogin";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Logado = () =>
{
  return(<div><span>voce está logado!</span>
  <div><a href="/sessao">ir para sessao</a> </div>
  
  </div>)
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/Stack/:un" component={DynamicSelector} />
      <Route path="/Unidades" component={Unidades} />
      <PrivateRoute path="/Intra" component={Logado} />
      <Route path="/Sessao" component={TesteLogin} />
      <Route path="*" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
