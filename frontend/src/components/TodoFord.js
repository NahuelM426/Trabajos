import React from 'react';
import { uuid } from 'uuidv4';

export default class TodoForm extends React.Component {

    state = {
        image: null,
        vista: null,
        imageC: false
    }

    onChange = (e) => {
        console.log("event", e.target.files[0])
        this.setState({ image:e.target.files[0] })
        this.setState({ vista: URL.createObjectURL(e.target.files[0]) }, () => { console.log("file-onCha", this.state) });
    }

    handleSumit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: uuid(),
            image:this.state.image,
            imageC:this.state.imageC,
            vista: this.state.vista,
        },console.log("state depues",this.state));
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSumit} enctype = " multipart / form-data ">
                <label for="formFileLg" class="form-label " >Elije Imagen</label>
                <input type="file" name="imagenes" class="form-control-file col-md-12  mr-5 p-1" onChange= {this.onChange}></input>
                <button class="btn btn-success col-md-12 mt-2 p-1">+</button>
            </form>
        );
    }

}