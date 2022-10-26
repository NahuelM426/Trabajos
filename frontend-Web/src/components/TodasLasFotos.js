import React from 'react';
import { useParams } from 'react-router-dom';

const TodasLasFotos = () => {
    console.log(useParams())
    const { id } = useParams()
    console.log(id)

    const [foto, setFoto] = React.useState([])

    React.useEffect(async () => {
      return  await buscarFotos()
    },[])

    const buscarFotos = async () => {
        const dato = await fetch(`http://localhost:4000/api/photos`,{
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //  Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTkxZmQ3Mjc2YTBhN2Y3ZGNlZGMyMiIsImVtYWlsIjoibWFzY2FAZ21haWwuY29tIiwiaWF0IjoxNjY1ODYyMTY4LCJleHAiOjE2NjU5NDg1Njh9.JjFh9uE1VylcPFXtLGDC3PdhlhUBpkYJ0WnVSYv6vR0"
            }
        })
        const fotos = await dato.json()
        const DireccionFotos = fotos.map(function (f) {
            console.log("quetiene", f)
            return f.filePath
        })
        setFoto(DireccionFotos)
    }

    return (
        <div class="container-fluid color">
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
                </div>
            </div>
        </div>
    )
}

export default TodasLasFotos