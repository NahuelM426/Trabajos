import React from 'react';
import { useParams } from 'react-router-dom';

const TrabajosGaleri = () => {  
    console.log(useParams())
    const {id} = useParams()
    console.log(id)

    const [foto,setFoto] = React.useState([])
    const [fotosT,setFotost] = React.useState([])
    

    React.useEffect(async () => {
        await buscarFotos()
    },[])

    const buscarFotos = async () =>{
        const dato = await fetch(`http://localhost:4000/pileta/piletas/${id}`)
        const trabajo = await dato.json()
        console.log("trbajo",trabajo)
        const datos = trabajo.fotos.map(function(f){
                console.log("quetiene",f)
                return f.foto.filePath
            })
        setFoto(datos)
    }
    console.log("foto",foto)

    return ( 
        <div> 
             <h1>{foto.message}</h1> 
             <div class="col-12">
                        {foto.map(f => (
                            <figure>
                                <img
                                src={process.env.PUBLIC_URL + 'http://localhost:4000/'+f }
                                class="shadow-lg p-3 mb-2 bg-body rounded"
                                style={{width: 400, height: 300} }
                                />
                                <figcaption class="figure-caption" ></figcaption>
                            </figure>
                        ))}
            </div>
        </div>
    )
    
}

export default TrabajosGaleri