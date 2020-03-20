import React from "react";
import { Link } from "react-router-dom";

class AddInventBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/add"}>
                    <button className="button is-success is-large" onClick={this.handleClick.bind(this)}>Add Quantity</button>
                </Link>
            </div>
        )
    }
}

export default AddInventBtn;