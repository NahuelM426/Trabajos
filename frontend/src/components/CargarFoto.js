
import React from 'react'
const axios = require("axios");
class CargarFoto extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeTexT = this.onChangeTexT.bind(this);
        this.state = {
          title:'',
          image:null,
          vista:null,
          imageC:false
      }
      }

      handleSubmit=(e)=>{
        const formData = new FormData();
        formData.append('image',this.state.image);
        formData.append('title',this.state.title)

        const conf = {
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                'content-type': 'multipart/form-data'
            }
        }

        axios.post("http://localhost:4001/api/photos",formData,conf)
            .then((res) => res.json())
            .then( prds => alert(prds.message))
            .catch((error) => {});
    }
    
    onChange=(e)=> {
        console.log("event-onCha",e.target.files[0])
        this.setState({image:e.target.files[0]})
        this.setState({vista:URL.createObjectURL(e.target.files[0])},()=>{console.log("file-onCha",this.state)});
        this.setState({imageC:true},console.log("state",this.state));

    }
    
    onChangeTexT = (e) =>{
      this.setState({title: e.target.value});
      

    }

    render(){
        return(
           <div class="row align-items-start">
            <form enctype = " multipart / form-data "  >
                    <div class="row mb-3">
                      <label for="title" class="col-sm-2 col-form-label">Titulo</label>
                        <div class="col-sm-6">
                          <input type="text" name="title" onChange= {this.onChangeTexT} class="form-control" placeholder="Titulo" ></input>
                    </div>
                    <div class="custom-file">
                           <label for="exampleFormControlFile1" style={ {margin :"12px"}} >Elija Una Imagen</label>
                           <input type="file" name="image" onChange= {this.onChange} ></input>
                    </div>
                    <div class="row mb-2">
                        <div style={ {margin :"5px"}} hidden={this.state.imageC ?  false : true}>
                          <img class="rounded float-end" alt="..." 
                            src={this.state.vista}
                            style={{width: 400, height: 300} }
                        />
                    </div>
                  </div>
              </div>
                <button style={ {margin :"5px"}}class="btn btn-outline-success" onClick={this.handleSubmit}> Listo</button>
            </form>
          </div>
        );

}
}
export default CargarFoto;