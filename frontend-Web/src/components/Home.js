import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {

    const { loginWithRedirect } = useAuth0()

    return (
        <div>
            <button class="btn btn-outline-success" onClick={() => loginWithRedirect()}>Iniciar Sesion</button>
        </div>

    )
}

export default Home