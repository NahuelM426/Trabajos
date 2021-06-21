import React from 'react';
import ListaDePiletas from './components/ListaDePiletas'
import CargarFoto from './components/CargarFoto'
import ListaDeTrabajo from './components/ListaDeTrabajos'

import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"

import './App.css';

function ClientesComponent() {
  return (<ListaDePiletas entity="photos"/>)
}
function CargarFotoComponent() {
  return (<CargarFoto entity="CargarF"/>)
}
function CargarTrabajoComponent() {
  return (<ListaDeTrabajo entity="CargarTrabajo"/>)
}

function App() {
  return (
    
    <div className="App">
    <Router>
      <header className="App-header">
        <ul>
          <li><NavLink to="/photos">Fotos</NavLink></li>
          <li><NavLink to="/CargarTrabajo">Trabajo</NavLink></li>
          <li><NavLink to="/cargarF">CargarFoto</NavLink></li>
        </ul>
      </header>
      <main className="App-main">
          <Switch>
            <Route path="/photos"  component={ClientesComponent} />
            <Route path="/CargarTrabajo"  component={CargarTrabajoComponent} />
            <Route path="/cargarF"  component={CargarFotoComponent} />
            <Redirect to="/" />
          </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;