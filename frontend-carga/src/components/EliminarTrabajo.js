import React, { useState, useEffect } from 'react';
import EliminarTrabajoRow from './EliminarTrabajoRow';
import { useParams } from 'react-router-dom';

const EliminarTranjo = () => {
    const { token } = useParams()

    const [trabajo, setTrabajo] = useState([])
    const [selected, setSelected] = useState()

    useEffect(async () => {
        await buscarTrabajo()
        console.log("trabajo", trabajo)
    }, [])

    const buscarTrabajo = async () => {

        return await fetch(`http://localhost:4000/pileta/trabajos`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
            .then(prds => setTrabajo(prds))
    }
    const select = (unTrabajo) => {
        setSelected(unTrabajo)
    }

    return <div class="container">
        <div class="row center">
            {trabajo.map((unTrabajo, index) => {
                return (
                    <div class="col-lg-3 ml-3 m-3 bg-light border rounded">
                        <EliminarTrabajoRow
                            key={index.index}
                            trabajos={trabajo}
                            id={unTrabajo.id}
                            trabajo={unTrabajo}
                            token = {token}
                            selector={select}
                        ></EliminarTrabajoRow>
                    </div>)
            })}
        </div >
    </div >
}
export default EliminarTranjo