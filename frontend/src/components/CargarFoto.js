
import React from 'react'
import TodoForm from './TodoFord';
import Todo from './Todo'
const axios = require("axios");
class CargarFoto extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeTexT = this.onChangeTexT.bind(this);
    this.state = {
      title: '',
      image: null,
      vista: null,
      imageC: false,
      todos: [],
      todoToSho: 'all',
      imagenes: []
    }
  }

  handleSubmit = (e) => {
    console.log('vista-Previa', this.state.image)
    const formData = new FormData();
    formData.append('image', this.state.image);

    console.log('vista-Previa-imag', formData)
    formData.append('title', this.state.title)

    const conf = {
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
        'Content-Type': 'multipart/form-data'
      }
    }

    axios.post("http://localhost:4000/api/photos", formData, conf)
      .then((res) => res.json())
      .then(prds => alert(prds.message))
      .catch((error) => { });
    e.preventDefault();
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
  handlePortado = (id) => {
    if (this.state.todos.filter(todo => todo.imageC == false)) {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              imageC: !todo.imageC
            }
          } else {
            return todo
          }
        })
      }, () => console.log("portda", this.state))
    } else {
      return (<h1>Ya Fue Eleguida </h1>)
    }
  }
  onChange = (e) => {
    console.log("event-onCha", e.target.files[0])
    this.setState({ image: e.target.files[0] }, console.log('image-console', this.state.image))
    this.setState({ vista: URL.createObjectURL(e.target.files[0]) }, () => { console.log("file-onCha", this.state) });
    this.setState({ imageC: true }, console.log("state", this.state));

  }

  onChangeTexT = (e) => {
    this.setState({ title: e.target.value });


  }

  render() {
    let todos = [];
    if (this.state.todoToSho === 'all') {
      todos = this.state.todos;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <form enctype=" multipart / form-data "  >
            <div className="col-sm-12">
              <label for="title" className="col-sm-12 col-form-label">Titulo</label>
              <div className="col-sm-12">
                <input type="text" name="title" onChange={this.onChangeTexT} className="form-control" placeholder="Titulo" ></input>
              </div>
            </div>
          </form>
        </div>
        <hr />
        <div class="row border shadow-lg p-3 mb-5 bg-light bg-body rounded">
          <TodoForm onSubmit={this.addTodo} />
          {todos.map(todo => (
            <div className="col-sm-4 ml-3 mt-2">
              <Todo
                key={todo.id}
                onDelete={() => this.handleDeleteTodo(todo.id)}
                boolean={() => this.handlePortado(todo.id)}
                todo={todo}
              />
            </div>
          ))}
        </div>
        <hr />
        <div className="col-6" >
          <p><em>Total:{this.state.todos.filter(todo => !todo.complete).length}</em></p>
        </div>
        <button style={{ margin: "5px" }} className="btn btn-outline-success" onClick={this.handleSubmit}> Listo</button>
      </div>
    );

  }
}
export default CargarFoto;