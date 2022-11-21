import React from 'react';
import ListaDePiletas from './components/ListaDePiletas'
import Prueba from './components/prueba';
import CargarFoto from './components/CargarFoto'
import ListaDeTrabajo from './components/ListaDeTrabajos'
import TrabajosGaleri from './components/TrabajosGaleri';
import TodasLasFotos from './components/TodasLasFotos';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom"

import CargarTrabajo from './components/CargarTrabajo';

function HomeComponent() {
  return (<ListaDePiletas entity="Home" />)
}
function TodasFotos() {
  return (<TodasLasFotos entity="TodasLasFotos" />)
}
function CargarFotoComponent() {
  return (<CargarFoto entity="CargarF" />)
}
function ListadoDeTrabajoComponent() {
  return (<ListaDeTrabajo entity="ListaDeTrabajos" />)
}
function CargarTrabajoFromComponent() {
  return (<CargarTrabajo entity="CargaDeTrabajo" />)
}



function App() {

  return (
    <Router>
      <div className="container mt-3 ">
          <div className="btn-group">
            <NavLink to="/Home" className="btn btn-secondary" >
              Inicio
            </NavLink>
            <NavLink to="/ListaDeTrabajos" className="btn btn-secondary" >
              Trabajo
            </NavLink>
            {/* <NavLink to="/CargaDeTrabajo" className="btn btn-secondary" activeClassName="active"  >
              CargarTrabajo
            </NavLink> */}
          </div>
        <hr />
        <Switch>
          <Route path="/Galeria/:id">
            <TrabajosGaleri />
          </Route>
          <Route path="/prueba">
            <Prueba></Prueba>
          </Route>
          <Route path="/Fotos">
            <TodasLasFotos></TodasLasFotos>
          </Route>
          <Route exact path="/ListaDeTrabajos" component={ListadoDeTrabajoComponent} />
          <Route exact path="/CargaDeTrabajo" component={CargarTrabajoFromComponent} />
          <Route exact path="/Home" component={HomeComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;