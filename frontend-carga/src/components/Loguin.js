
import React from "react";
const axios = require("axios")

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            user: {
                email: '',
                password:''
            },
            token:{},
        }
    }


    onChangeUser = (event) => {
        var newuser = Object.assign({},this.state.user);
        newuser[event.target.name] = event.target.value;
        console.log("newUser",newuser)
        this.setState({user: newuser }, () => console.log("verUser",this.state.user));
    }
    handleSubmit = (e)=>{
        
        fetch(`http://localhost:4000/signup/signin`,{
            method: "POST",
            body: JSON.stringify(this.state.user),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then(prds => this.setState({token:prds.token}),(prds) => alert(prds.msg))
        
    console.log("userState",this.state)
    e.preventDefault();
    } 
 
    render() {

        return (
            <div id="login">
                <h3 class="text-center text-white pt-5">Login form</h3>
                <div class="container">
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div id="login-box" class="col-md-12">
                                <form id="login-form" class="form" action="" method="post">
                                    <h3 class="text-center text-info">Login</h3>
                                    <div class="form-group">
                                        <label for="email" class="text-info">Email:</label>
                                        <input type="text" name="email" id="email" class="form-control" value={this.state.user.email} onChange={this.onChangeUser} />
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="text-info">Password:</label>
                                        <input type="text" name="password" id="password" class="form-control" value={this.state.user.password} onChange={this.onChangeUser} />
                                    </div>

                                    <div>
                                        <button style={{ margin: "5px" }} onClick={this.handleSubmit} className="btn btn-outline-success" > Listo</button>
                                    </div>

                                    <div id="register-link" class="text-right">
                                        <a href="#" class="text-info">Register here</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Login