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
        console.log("Render", this.state)
        return (
            <div>

            <div>
            {this.state.nahuel.map(f => (
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
           ))}
            </div>
            <tr key={this.state.trabajo._id}> 
            </tr>    
            <div> 
                <button style={ {margin :"5px"}}class="btn btn-outline-success" onClick={this.vista}> Listo</button>
          
                </div>
            </div>
        );

    }
}

export default TrabajoRow