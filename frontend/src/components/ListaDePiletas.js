import React from 'react'
import FotosRow from './FotosRow'

class  ListaDePiletas extends React.Component{

    constructor(props){
        super(props);
        this.select = this.select.bind(this)
        this.state = { fotos: [], selected:{}}

    }
    componentWillMount() {
        fetch(`http://localhost:4001/api/photos`)
          .then( res => res.json())
          .then( prds => {
            this.setState({fotos: prds},console.log("fotos",this.state))}
    )};
    
    
    render(){
        if(this.state.fotos.length > 0){
            return(
                <div className = "Fotocss">
                    <h2> {this.props.title}</h2>

                <table>
                 <thead>
                     <tr>
                         
                     </tr>
                 </thead>
                 <tbody>
                     {this.renderRows()}
                 </tbody>
                </table>
            
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
    select(unFoto) {
        this.setState({selected:unFoto })
      }

    renderRows() {
        return this.state.fotos.map((unFoto, index) => {
          return (
            <FotosRow foto={unFoto} selector={this.select}/>
          );
        })
      }
}

export default ListaDePiletas