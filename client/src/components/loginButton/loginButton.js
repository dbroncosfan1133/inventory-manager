import React from "react";
import "./loginButton.css";


function Login (props) {
    return (
        <div className="buttons">
            <button className="button is-link is-large has-background-black-bis" {...props}>Login</button>
        </div>
    );
}

export default Login;