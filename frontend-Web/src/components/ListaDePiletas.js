import React from 'react'
import imagen from '../img/Portada3.jpg'

const ListaDePiletas = () => {

  return (
    <div class="container">
      <div class="fondoInicio shadow p-3 mb-5 bg-body rounded">
        <img src={imagen} class="imgPortada rounded" />
        <hr />
        <div>
          <h5 class="text-end">Nosotros</h5>
          <p class="text-capitalize col-lg-8"> Nos especializamos en la construcción de piscinas. Agregamos valor desde la
            innovación, siempre con productos de vanguardia y diseños exclusivos. También hacemos restyling
            de viejas piscinas, generando nuevos espacios para disfrutar y destacar.</p>
        </div>
      </div>
      <form enctype=" multipart / form-data " class="fondoInicio shadow p-3 mb-5 bg-body rounded"  >
        <div class="mb-3 col-lg-6 ">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="mb-3 col-lg-6">
          <label for="exampleFormControlTextarea1" class="form-label">Consulta</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </div>
  )


}

export default ListaDePiletas