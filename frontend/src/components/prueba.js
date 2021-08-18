
import React from 'react'
import TodoForm from './TodoFord';
import Todo from './Todo'
const axios = require("axios");
class Prueba extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit.bind(this)
        this.state = {
            todos: [],
            todoToSho: 'all',
            imagenes: []
        }
    }

    handleSubmit = (e) => {
        console.log("vista Previa", this.state.imagenes)
        console.log("vista Previa", this.state.imagenes[0])

        const formData = new FormData();
        this.state.imagenes.map(i => {
            formData.append('imagenes', i);
        })

        console.log("fromData-Prueba", formData)
        const conf = {
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                "Content-Type": "multipart/form-data"
            }
        }

        axios.post("http://localhost:4000/api/prueba", formData, conf)
            .then((res) => res.json())
            .then(prds => alert(prds.message))
            .catch((error) => { });
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
    render() {
        let todos = [];
        if (this.state.todoToSho === 'all') {
            todos = this.state.todos;
        }
        return (
            <div >
                <div class="row border rounded shadow-lg p-3 mb-5 bg-light bg-body rounded">
                    <TodoForm onSubmit={this.addTodo} />
                    {todos.map(todo => (
                        <div class="col-sm-3 ml-3 mt-2">
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
                <div class="col-6" >
                <p><em>Total:{this.state.todos.filter(todo => !todo.complete).length}</em></p>
                </div>
                <div>
                    <button class="btn btn-outline-success" onClick={this.handleSubmit}> Listo</button>
                </div>
            </div>
        );

    }
}
export default Prueba;