import React from 'react';
import {Link} from 'react-router-dom'
import imagen from '../img/nadar2.jpeg'
class TrabajoRow extends React.Component {
    constructor(props) {
        super(props);
        this.map = this.map.bind(this)
        this.state = { trabajos:props.trabajos,trabajo:props.trabajo,fotos:{},n:0,nahuel:[]}

    }
    UNSAFE_componentWillMount = () =>{
        console.log("wiillMonuntFotos")
        const _id = this.state.trabajo._id
        console.log("_id",_id)
        fetch(`http://localhost:4000/pileta/piletas/`+_id)
        .then( res => res.json())
        .then( prds => {
        this.setState({fotos: prds},()=> this.map())})
        this.setState({n:4},()=>console.log("n",this.state))
    }

    map(){
        const datos = this.state.fotos.fotos.map(function(f){
            console.log("quetiene",f)
            return f.foto.filePath
        },console.log("nahuel",this.state))
        this.setState({nahuel:datos})
        
    }

    
 
    render() {
        return (
            <div class="container-fluid" class="shadow-none p-3 mb-5 bg-light rounded" >
                    <div  class="justify-content-lg-start">
                        <div class="col-4">
                        <h5>Descricon: </h5>
                            <p class="text-end"> Las cactáceas son plantas de la familia de las suculentas. Son originarias de América pero también se encuentran en África y Madagascar. Son de tamaño mediano, grande o pequeño. En su interior contienen gran caudal de sábila como reserva de líquido dado que son plantas que se encuentran en climas desérticos (secos).

                                Fuente: https://www.ejemplos.co/10-ejemplos-de-textos-descriptivos/#ixzz6yRqwt8ie</p>
                        </div>
                        <div class="col-8">
                        {this.state.nahuel.map(f => (
                            <figure>
                                <img
                                src={process.env.PUBLIC_URL + 'http://localhost:4000/'+f }
                                class="shadow-lg p-3 mb-2 bg-body rounded"
                                style={{width: 400, height: 300} }
                                />
                                <figcaption class="figure-caption" ></figcaption>
                            </figure>
                        ))}
                        </div>

                        <Link to={`/Galeria/${this.state.trabajo._id}`} >
                        <img src={imagen} style={{width: 90, height: 40, marginLeft:160 } }/>
                        </Link>
                    </div>
                    {/* <button onClick={() => browserHistory.Push(`/photos`)}>l</button> */}
            </div>
        );

    }
}

export default TrabajoRow