import React from 'react'
import TrabajoRow from './TrabajoRow'

class ListaDeTrabajo extends React.Component{

    constructor(props){
        super(props);
        this.select = this.select.bind(this);
        this.state = { trabajos:[], selected:{}}

    }
    componentWillMount() {
        fetch(`http://localhost:4000/pileta/piletas`)
          .then( res => res.json())
          .then( prds => {
            this.setState({trabajos: prds},()=>{console.log("Trabajo",this.state)})}
    )};
    
    render(){
        if(this.state.trabajos.length > 0){
            return(
                <div className = "Trabajoscss">
                    <h2> {this.props.title}</h2>

                <table>
                 <thead>
                     <tr>
                     <th>id</th>
                     <th>Tipo</th>
                     <th>fotos</th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.renderRows()}
                 </tbody>
                </table>
            
                <div> 
                <button style={ {margin :"5px"}}class="btn btn-outline-success" onClick={this.busquedoDeFoto}> Listo</button>
          
                </div>
                </div>
                
                )
            }
            else {
                return(
                    <div className="productosCSS">
                  CARGANDO
              </div>);  
          }
        }
        select(unTrabajo) {
            this.setState({selected:unTrabajo })
        }
       
        renderRows() {
            let trabajos = this.state.trabajos;
            return !trabajos
              ? console.log("NULL", null)
              : trabajos.map((unTrabajo, index) => {
                  return (
                    <TrabajoRow
                      key = {index.index}
                      trabajos={trabajos}
                      id = {unTrabajo.id}
                      trabajo={unTrabajo}
                      selector={this.select}
                      ></TrabajoRow>
            )})}
}

export default ListaDeTrabajo