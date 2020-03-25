import React from "react";
import { Link } from "react-router-dom";
import "./addinventorybtn.css";

class AddInventBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/add"}>
                    <button className="button addQ is-large" onClick={this.handleClick.bind(this)}>Add Quantity</button>
                </Link>
            </div>
        )
    }
}

export default AddInventBtn;