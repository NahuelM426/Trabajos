import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom"

import CargarTrabajo from './components/CargarTrabajo';
import Loguin from './components/Loguin';

function CargarTrabajoFromComponent() {
  return (<CargarTrabajo entity="CargaDeTrabajo" />)
}
function LoguinFromComponent() {
  return (<Loguin entity="Loguin" />)
}


function App() {

  return (
    <Router>
      <div className="container p-2">
        <div className="colo btn-group">
          <NavLink to="/CargaDeTrabajo" className="btn btn-secondary" activeClassName="active"  >
            CargarTrabajo
          </NavLink>
          <NavLink to="/Loguin" className="btn btn-secondary" activeClassName="active"  >
            Loguin
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route exact path="/CargaDeTrabajo" component={CargarTrabajoFromComponent} />
          <Route exact path="/Loguin" component={LoguinFromComponent} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;