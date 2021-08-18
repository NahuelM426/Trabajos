import React from 'react';
import '../App.css';

class FotosRow extends React.Component {

    constructor(props) {
        super(props);
        this.selectFoto = this.selectFoto.bind(this);
        this.state = { foto: [] }

    }

    selectFoto() {
        this.props.selector(this.props.foto)
    }

    render() {
        return (
            <div class='container'>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 rounded ">
                        <img
                            src={process.env.PUBLIC_URL + 'http://localhost:4000/' + this.props.foto.filePath}
                            class="rounded imgT"
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default FotosRow