import React from "react";

function LoginEmail() {
    return (
        <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                </span>
             </p>
        </div>
    );
}

export default LoginEmail;