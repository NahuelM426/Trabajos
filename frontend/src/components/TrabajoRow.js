import React from 'react';
import { Link } from 'react-router-dom'
import imagen from '../img/nadar2.jpeg'
class TrabajoRow extends React.Component {
    constructor(props) {
        super(props);
        this.map = this.map.bind(this)
        this.state = { trabajos: props.trabajos, trabajo: props.trabajo, fotos: {}, n: 0, nahuel: [] }

    }
    UNSAFE_componentWillMount = () => {
        console.log("wiillMonuntFotos")
        const _id = this.state.trabajo._id
        console.log("_id", _id)
        fetch(`http://localhost:4000/pileta/trabajos/` + _id)
            .then(res => res.json())
            .then(prds => {
                this.setState({ fotos: prds }, () => this.map())
            })
        this.setState({ n: 4 }, () => console.log("n", this.state))
    }

    map() {
        const datos = this.state.fotos.fotos.map(function (f) {
            console.log("quetiene", f)
            return f.foto.filePath
        }, console.log("nahuel", this.state))
        this.setState({ nahuel: datos })

    }



    render() {
        return (
                <div class="card-body">
                    <img
                        src={process.env.PUBLIC_URL + 'http://localhost:4000/' + this.state.nahuel[0]}
                        class="rounded imgT"
                
                    />
                    <h5>{this.state.trabajo.titulo}</h5>
                    <h7>Descripción: </h7> 
                    <p class="text-end "> {this.state.trabajo.descripcion}</p>
                    <Link to={`/Galeria/${this.state.trabajo._id}`} >
                        <img src={imagen} class="rounded border imgLink" />
                    </Link>
                </div>
        );

    }
}

export default TrabajoRow