import React from 'react';

import { BrowserRouter as Router, Route, Switch,} from "react-router-dom"

import CargarTrabajo from './components/CargarTrabajosHoosk';
import Loguin from './components/Loguin';
import TodasLasFotos from './components/TodasLasFotos';

function LoguinFromComponent() {
  return (<Loguin entity="Loguin" />)
}
function CargarTrabajoFromComponent() {
  return (<CargarTrabajo entity="CargaDeTrabajo" />)
}
function TodaslasFotosFromComponent() {
  return (<TodasLasFotos entity="TodaslasFotos" />)
}

function App() {

  return (
    <Router>
      <div className="container p-2">
        <hr />
        <Switch>
          <Route exact path="/" component={LoguinFromComponent} /> 
          <Route path="/Fotos/:token">
            <TodasLasFotos></TodasLasFotos>
          </Route>
          <Route exact path="/CargaDeTrabajo/:token" component={CargarTrabajoFromComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;