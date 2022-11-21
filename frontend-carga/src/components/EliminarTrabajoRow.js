import { token } from 'morgan';
import React from 'react';

class EliminarTrabajoRow extends React.Component {

    constructor(props) {
        super(props);
        this.map = this.map.bind(this)
        this.eliminar = this.eliminar.bind(this)
        this.state = {
            trabajos: props.trabajos,
            trabajo: props.trabajo,
            fotos: {},
            n: 0,
            TrabajoF: [],
            token: props.token
        }

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
    }

    map() {
        const datos = this.state.fotos.fotos.map(function (f) {
            // console.log("verfica State si tiene los datos del pedido a la Base", f)
            return f.foto.filePath
        })
        this.setState({ TrabajoF: datos })

    }
    eliminar = (e) => {
        const _id = this.state.trabajo._id
        const token = this.state.token
        fetch(`http://localhost:4000/pileta/trabajos/` + _id, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        }).then((res) => res.json())
          .then(prds => alert(prds.message))
        window.location.reload()
    }




    render() {
        return (
            <div class="container text-center">
                <div class="row">
                    <figure>
                        <img
                            src={process.env.PUBLIC_URL + 'http://localhost:4000/' + this.state.TrabajoF[0]}
                            class="rounded h-100 w-100"
                        />
                    </figure>
                    <div class="text-end"  >
                        <h5>{this.state.trabajo.titulo}</h5>
                        <h7>Descripción: </h7>
                        <p > {this.state.trabajo.descripcion}</p>
                    </div>
                </div>
                <button class="btn btn-danger col-2 p-2" onClick={this.eliminar}>X</button>
            </div>
        );
    }
}

export default EliminarTrabajoRow