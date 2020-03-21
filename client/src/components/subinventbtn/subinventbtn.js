import React from "react";
import { Link } from "react-router-dom";

class SubInventBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/subtract"}>
                    <button className="button is-warning is-large" onClick={this.handleClick.bind(this)}>Sub Quantity</button>
                </Link>
            </div>
        )
    }
}

export default SubInventBtn;