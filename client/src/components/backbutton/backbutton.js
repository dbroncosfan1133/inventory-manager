import React from "react";
import { Link } from "react-router-dom";

class BackButton extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/"}>
                    <button className="button is-danger is-large" onClick={this.handleClick.bind(this)}>Go Back</button>
                </Link>
            </div>
        )
    }
}

export default BackButton;