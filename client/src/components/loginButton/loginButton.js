import React from "react";
import "./loginButton.css";
import { Link } from "react-router-dom";


class Login extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/mainpage"}>
                    <button className="button is-large has-background-black-bis" onClick={this.handleClick.bind(this)}>Login</button>
                </Link>
            </div>
        )
    }
}


export default Login;