import React from "react";
import { Link } from "react-router-dom";
import "./loginButton.css";

class Login extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/mainpage"}>
                    <button className="button loginBtn is-large" onClick={this.handleClick.bind(this)}>Login</button>
                </Link>
            </div>
        )
    }
}


export default Login;