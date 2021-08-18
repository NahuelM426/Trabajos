import React from 'react';
import ListaDePiletas from './components/ListaDePiletas'
import Prueba from './components/prueba';
import CargarFoto from './components/CargarFoto'
import ListaDeTrabajo from './components/ListaDeTrabajos'
import TrabajosGaleri from './components/TrabajosGaleri';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"

import CargarTrabajo from './components/CargarTrabajo';

function ClientesComponent() {
  return (<ListaDePiletas entity="photos"/>)
}
function CargarFotoComponent() {
  return (<CargarFoto entity="CargarF"/>)
}
function CargarTrabajoComponent() {
  return (<ListaDeTrabajo entity="CargarTrabajo"/>)
}
function CargarTrabajoFromComponent() {
  return (<CargarTrabajo entity="CargarT"/>)
}

function App() {
  return (
    <Router>
      <div  className="container mt-3 ">
      <div className="color" className="btn-group">
          <NavLink to="/photos" className="btn btn-secondary" >
            Fotos
          </NavLink>
          <NavLink to="/CargarTrabajo" className="btn btn-secondary" >
            Trabajo
          </NavLink>
          <NavLink to="/cargarF" className="btn btn-secondary" activeClassName="active"  >
            CargarFoto
          </NavLink>
          <NavLink to="/cargarT" className="btn btn-secondary" activeClassName="active"  >
            CargarTrabajo
          </NavLink>
      </div>
      <hr />
          <Switch>
            <Route path="/Galeria/:id">
              <TrabajosGaleri/>
            </Route>
            <Route path="/prueba">
              <Prueba></Prueba>
            </Route>
            <Route path="/photos" component={ClientesComponent} />
            <Route path="/CargarTrabajo" component={CargarTrabajoComponent} />
            <Route path="/cargarF" component={CargarFotoComponent} />
            <Route path="/cargarT" component={CargarTrabajoFromComponent} />
            <Redirect to="/" />
          </Switch>
    </div>
      </Router>
  );
}

export default App;