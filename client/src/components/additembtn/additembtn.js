import React from "react";
import { Link } from "react-router-dom";
import "./additembtn.css";

class AddItemBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/additempage"}>
                    <button className="button add is-large" onClick={this.handleClick.bind(this)}>Add Item</button>
                </Link>
            </div>
        )
    }
}

export default AddItemBtn;