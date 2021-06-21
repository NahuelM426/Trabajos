import React from 'react';


class TrabajoRow extends React.Component {
    constructor(props) {
        super(props);
        this.map = this.map.bind(this)
        this.vista = this.vista.bind(this)
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
        this.setState({nahuel:datos},()=>this.vista())
        
    }
    vista(){
        this.state.nahuel.map(function(f){
            <figure>
            <img
              src={process.env.PUBLIC_URL + 'http://localhost:4000/'+f }
              class="figure-img img-fluid rounded shadow-3 mb-3"
              alt="..."
              className="img"
              style={{width: 300, height: 200} }
              />
            <figcaption class="figure-caption" >{}</figcaption>
          </figure>
        })
    }
    
    render() {
        return (
            <div class="container-fluid" class="shadow-none p-3 mb-5 bg-light rounded" >
                    <div  class="justify-content-lg-start">
                        <div class="col-4">
                        <h2  >Descricon: </h2>
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

                    </div>  
            </div>
        );

    }
}

export default TrabajoRow