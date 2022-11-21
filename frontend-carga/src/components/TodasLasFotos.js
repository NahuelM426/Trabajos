import React from 'react';
import { useParams } from 'react-router-dom';

const TodasLasFotos = () => {
    console.log(useParams())
    const { token } = useParams()
    console.log("token", token)

    const [foto, setFoto] = React.useState([])

    React.useEffect(() => {
        return buscarFotos()
    }, [])

    const buscarFotos = async () => {
        const dato = await fetch(`http://localhost:4000/api/photos`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
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
            {foto.map(f => (
                <figure>
                    <img
                        src={process.env.PUBLIC_URL + 'http://localhost:4000/' + f}
                        class="rounded float-left"
                        style={{ width: 350, height: 300, margin: 5 }}
                    />
                </figure>
            ))}
        </div>
    )
}

export default TodasLasFotos