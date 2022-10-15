import React from 'react'
import TrabajoRow from './TrabajoRow'
import '../App.css';

class ListaDeTrabajo extends React.Component {

    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
        this.state = { trabajos: [], selected: {} }

    }
    componentWillMount() {
        fetch(`http://localhost:4000/pileta/trabajos`)
            .then(res => res.json())
            .then(prds => {
                this.setState({ trabajos: prds }, () => { console.log("Trabajo", this.state) })
            }
            )
    };

    render() {
        if (this.state.trabajos.length > 0) {
            return (
                <div class="row">
                        {this.renderRows()}
                </div>

            )
        }
        else {
            return (
                <div className="productosCSS">
                    CARGANDO
                </div>);
        }
    }
    select(unTrabajo) {
        this.setState({ selected: unTrabajo })
    }

    renderRows() {
        let trabajos = this.state.trabajos;
        return !trabajos
            ? console.log("NULL", null)
            : trabajos.map((unTrabajo, index) => {
                return (
                    <div class="col-lg-5 col-sm-12 ml-5 bg-light border m-4 rounded">
                        <TrabajoRow
                            key={index.index}
                            trabajos={trabajos}
                            id={unTrabajo.id}
                            trabajo={unTrabajo}
                            selector={this.select}
                        ></TrabajoRow>
                    </div>
                )
            })
    }
}

export default ListaDeTrabajo