import React from "react";
import { Link } from "react-router-dom";
import "./backbutton.css";

class BackButton extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/mainpage"}>
                    <button className="button back is-large" onClick={this.handleClick.bind(this)}>Back</button>
                </Link>
            </div>
        )
    }
}

export default BackButton;