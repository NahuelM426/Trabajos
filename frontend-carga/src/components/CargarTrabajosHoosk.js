
import React, { useState } from 'react'
import TodoForm from './TodoFord';
import Todo from './Todo'
import '../App.css';
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom';
const axios = require("axios");

const CargarTrabajo = () => {

  console.log(useParams())
  const { token } = useParams()
  console.log("token", token)



  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues:
    {
      tipo: '',
      titulo: '',
      descripcion: '',
    }
  });
  const [todos,setTodos] = useState([])

  const onSubmit = (dato, even) => {
    console.log("even", dato)
    console.log("dato", even)
  }

  React.useEffect (todo => {
    setTodos([todo]);
  },[todos]);

  return (
    <div class="container-xl">
      <form enctype=" multipart / form-data " onSubmit={handleSubmit(onSubmit)} >
        <div>
          <div>
            <label for="title" class="col-md-2 col-form-label">Titulo</label>
            <div class="col-md-6">
              <input type="text"
                name="titulo"
                {...register('titulo', {
                  required: true,
                })}
                class="form-control"
                placeholder="Titulo"></input>
            </div>
          </div>
          <div>
            <label for="title" class="col-sm-2 col-form-label">Tipo</label>
            <div class="col-sm-6">
              <input
                type="text"
                name="tipo"
                {...register('tipo', {
                  required: true,
                })}
                class="form-control"
                placeholder="Tipo" ></input>
            </div>
          </div>
          <div>
            <label for="title" class="col-sm-2 col-form-label">Descripcion</label>
            <div class="col-sm-6">
              <input type="text"
                name="descripcion"
                {...register('descripcion', {
                  required: true,
                })}
                class="form-control"
                placeholder="Descripcion" ></input>
            </div>
          </div>
        </div>
        <div class="row border col-lg-8 col-md-10 col-sm-10 ml-3 mt-4 shadow-lg p-1  bg-light bg-body rounded">
          <TodoForm/>
          {todos.map(todo => (
            <div className="col-lg-5 ml-2 mt-2" data-bs-spy="scroll">
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
        <input type="submit" value="Enviar" class="btn btn-outline-success ml-3 m-3" />
      </form>
      {/* 
      {/* <button class="btn btn-outline-success ml-3 m-3" onClick={this.handleSubmit}> Listo</button> */}
    </div>
  );
}
export default CargarTrabajo;