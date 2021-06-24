import React from 'react';

class FotosRow extends React.Component {

    constructor(props) {
        super(props);
        this.selectFoto = this.selectFoto.bind(this);
        this.state = { foto: []}

    }
    
    selectFoto() {
        this.props.selector(this.props.foto)
    }
 
    render() {      
        return(
            <figure class="figure"  key={this.props.foto._id} onClick={this.selectFoto} >
                <img
                src={process.env.PUBLIC_URL + 'http://localhost:4000/'+this.props.foto.filePath }
                class="figure-img img-fluid rounded shadow-6 mb-6"
                alt="..."
                className="img"
                style={{width: 300, height: 200} }
                />
               <figcaption class="figure-caption" >{this.props.foto.title}</figcaption>
            </figure>
            )}

  }

  export default FotosRow