import React from "react";
import { Link } from "react-router-dom";

class AddItemBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/additempage"}>
                    <button className="button is-link is-large" onClick={this.handleClick.bind(this)}>Add Item</button>
                </Link>
            </div>
        )
    }
}

export default AddItemBtn;