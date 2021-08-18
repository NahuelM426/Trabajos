import React from 'react';
import { useParams } from 'react-router-dom';

const TrabajosGaleri = () => {
    console.log(useParams())
    const { id } = useParams()
    console.log(id)

    const [foto, setFoto] = React.useState([])
    const [trabajo, setTrabajo] = React.useState([])


    React.useEffect(async () => {
        await buscarFotos()
    }, [])

    const buscarFotos = async () => {
        const dato = await fetch(`http://localhost:4000/pileta/piletas/${id}`)
        const trabajo = await dato.json()
        setTrabajo(trabajo.TrabajoB)
        console.log("trbajo", trabajo)
        const datos = trabajo.fotos.map(function (f) {
            console.log("quetiene", f)
            return f.foto.filePath
        })
        setFoto(datos)
    }
    console.log("datos Trabajo", trabajo)

    return (
        <div class="container-fluid" class="color">
            <div>
                {foto.map(f => (
                    <figure>
                        <img
                            src={process.env.PUBLIC_URL + 'http://localhost:4000/' + f}
                            class="rounded float-left"
                            style={{ width: 350, height: 300, margin: 5 }}
                        />
                    </figure>
                ))}
                <div>
                </div>
                <div class="col-4"  >
                    <h5>{trabajo.titulo}</h5>
                    <h7>Descripción: </h7> <p class="text-end"> {trabajo.descripcion}</p>
                </div>
            </div>
        </div>
    )

}

export default TrabajosGaleri