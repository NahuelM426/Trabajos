import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const axios = require("axios")

const Login = () => {
    let history = useHistory();
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues:
        {
            email: '',
            password: '',
        }
    });
    const [passwordShown, setPasswordShown] = React.useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const verificaYRedirige = (prods) => {
        console.log("Prods", prods)

        if (prods.token != null) {
            history.push('/CargaDeTrabajo/' + prods.token)
        }
        else {
            alert(prods.msg)
        }
    }
    const onSubmit = (data, e) => {
        const user = {
            email: data.email,
            password: data.password,
        }

        fetch(`http://localhost:4000/signup/signin`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(prds => verificaYRedirige(prds))

        e.preventDefault();


    }

    return (
        <div id="login">
            <div class="container">
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">
                            <form id="login-form" class="form" action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                                <h3 class="text-center text-info">Registrarse</h3>
                                <div class="form-group">
                                    <label for="email" class="text-info">Email:</label>
                                    <input type="text" class="form-control" 
                                    placeholder="Email"
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                                    })} />
                                </div>
                                <div className="form-group">
                                    <label for="password" class="text-info">Password:</label>
                                    <input
                                        placeholder="Password"
                                        type={passwordShown ? "text" : "password"}
                                        class="form-control"
                                        {...register('password', {
                                            required: true,
                                        })}
                                    />
                                    <i onClick={togglePasswordVisiblity} >{eye}</i>
                                </div>
                                <input type="submit" value="Enviar" class="form-control" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login
