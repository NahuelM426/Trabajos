
import React from 'react'
import TodoForm from './TodoFord';
import Todo from './Todo'
import '../App.css';
const axios = require("axios");
class CargarTrabajo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeTexT = this.onChangeTexT.bind(this);
    this.state = {
      trabajo: {
        tipo: '',
        titulo: '',
        descripcion: '',
      },
      image: null,
      vista: null,
      imageC: false,
      todos: [],
      todoToSho: 'all',
      imagenes: []
    }
  }

  handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('image', this.state.image);
    formData.append('descripcion', this.state.trabajo.descripcion)
    formData.append('titulo', this.state.trabajo.titulo)
    formData.append('tipo', this.state.trabajo.tipo)
    const conf = {
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
        'content-type': 'multipart/form-data'
      }
    }

    axios.post("http://localhost:4000/pileta/piletas", formData, conf)
      .then((res) => res.json())
      .then(prds => alert(prds.message))
      .catch((error) => { });
  }

  onChange = (e) => {
    console.log("event-onCha", e.target.files[0])
    this.setState({ image: e.target.files[0] })
    this.setState({ vista: URL.createObjectURL(e.target.files[0]) }, () => { console.log("file-onCha", this.state) });
    this.setState({ imageC: true }, console.log("state", this.state));

  }

  // onChangeTexT = (e) =>{
  //   this.setState({title: e.target.value});
  // }
  onChangeTexT = (event) => {
    var newTrabajo = Object.assign({}, this.state.trabajo);
    newTrabajo[event.target.name] = event.target.value;
    console.log("trabajo", newTrabajo)
    this.setState({ trabajo: newTrabajo });
  }
  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    }, () => console.log("state Padre", this.state));
    this.setState({
      imagenes: [todo.image, ...this.state.imagenes]
    }, () => console.log("Padre-image", this.state.imagenes))
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    let todos = [];
    if (this.state.todoToSho === 'all') {
      todos = this.state.todos;
    }
    return (
      <div class="container">
        <form enctype=" multipart / form-data "  >
          <div>
            <div>
              <label for="title" class="col-md-2 col-form-label">Titulo</label>
              <div class="col-md-6">
                <input type="text" name="titulo" onChange={this.onChangeTexT} class="form-control" placeholder="Titulo" ></input>
              </div>
            </div>
            <div>
              <label for="title" class="col-sm-2 col-form-label">Tipo</label>
              <div class="col-sm-6">
                <input type="text" name="tipo" onChange={this.onChangeTexT} class="form-control" placeholder="Tipo" ></input>
              </div>
            </div>
            <div>
              <label for="title" class="col-sm-2 col-form-label">Descripcion</label>
              <div class="col-sm-6">
                <input type="text" name="descripcion" onChange={this.onChangeTexT} class="form-control" placeholder="Descripcion" ></input>
              </div>
            </div>
          </div>
        </form>
        <hr />
        <div class="row border col-lg-6 ml-3 shadow-lg p-1 mb-5 bg-light bg-body rounded">
          <TodoForm onSubmit={this.addTodo} />
          {todos.map(todo => (
            <div className=" col-lg-4 col-md-6 col-sm-12 ml-2 mt-2">
              <Todo
                key={todo.id}
                onDelete={() => this.handleDeleteTodo(todo.id)}
                boolean={() => this.handlePortado(todo.id)}
                todo={todo}
              />
            </div>
          ))}
        </div>
        <button  class="btn btn-outline-success" onClick={this.handleSubmit}> Listo</button>
      </div>
    );

  }
}
export default CargarTrabajo;