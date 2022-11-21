
import React, { useState } from 'react'
import TodoForm from './TodoFord';
import Todo from './Todo'
import '../App.css';
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
const axios = require("axios");

const CargarTrabajo = () => {

  const { token } = useParams()

  const { register, handleSubmit } = useForm({
    defaultValues:
    {
      tipo: '',
      titulo: '',
      descripcion: '',
    }
  });
  const [todosImagenes, setTodasImagenes] = useState([])
  const [imagenes, setImagenes] = useState([])

  const onSubmit = (dato) => {
    const formData = new FormData();
    imagenes.map(i => {
      return formData.append('imagenes', i.image);
    })

    formData.append('descripcion', dato.descripcion)
    console.log("dato.des", dato.tipo)
    formData.append('titulo', dato.titulo)
    formData.append('tipo', dato.tipo)
    const conf = {
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
        'content-type': 'multipart/form-data',
        Authorization: "Bearer " + token
      }
    }
    console.log("fromdata", formData.tipo)

    axios.post("http://localhost:4000/pileta/array", formData, conf)

    window.location.reload()//recargar
  }

  const addTodo = (todo) => {
    setTodasImagenes([todo, ...todosImagenes])
    setImagenes([todo, ...imagenes])
  };

  const handleDeleteTodo = (id) => {
    const filterTodaImages = todosImagenes.filter(todo => todo.id !== id)
    setTodasImagenes(filterTodaImages)
  }
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
              <select class="form-select form-select-lg mb-3 form-control " aria-label=".form-select-lg example" {...register("tipo", { required: true, })}>
                <option value="">Select...</option>
                <option value="Casa">Casa</option>
                <option value="Pileta">Pileta</option>
              </select>
            </div>
          </div>
          <div>
            <label for="title" class="col-sm-2 col-form-label">Descripcion</label>
            <div class="col-sm-8">
              <input
                type="text"
                name="descripcion"
                {...register('descripcion', {
                  required: true,
                })}
                class="form-control aria-label=With textarea"
                placeholder="Descripcion" ></input>
            </div>
          </div>
        </div>
        <div class="row border col-lg-8 col-md-10 col-sm-10 ml-3 mt-4 shadow-lg p-1  bg-light bg-body rounded">
          <TodoForm onSubmit={addTodo} />
          {todosImagenes.map(todo => (
            <div className="col-lg-5 ml-2 mt-2" data-bs-spy="scroll">
              <Todo
                key={todo.id}
                onDelete={() => handleDeleteTodo(todo.id)}
                todo={todo}
              />
            </div>
          ))}
        </div>
        <hr />
        <input type="submit" value="Enviar" class="btn btn-outline-success ml-3 m-3" />
      </form>
      <Link to={`/EliminarTrabajo/${token}`} >
        {/* <img src={imagen} class="rounded border imgLink" /> */}
        <button class="btn btn-outline-danger ml-3 m-3  ">Eliminar Trabajos</button>
      </Link>
    </div>
  );
}
export default CargarTrabajo;