import React from "react";
import { Link } from "react-router-dom";
import "./logoutbtn.css";

class LogoutBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/login"}>
                    <button className="button logout is-large" onClick={this.handleClick.bind(this)}>Logout</button>
                </Link>
            </div>
        )
    }
}

export default LogoutBtn;