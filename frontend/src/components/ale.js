import React from 'react'

class Ale extends React.Component{

    constructor(props){
        super(props);
        this.state = { trabajos:[], selected:{}}

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

export default Ale