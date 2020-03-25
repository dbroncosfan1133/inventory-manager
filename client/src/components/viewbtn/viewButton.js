import React from "react";
import { Link } from "react-router-dom";
import "./viewbtn.css";

class ViewInventory extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (

            <div className="buttons">
                <Link to={"/viewinventory"}>
                    <button className="button view is-large" onClick={this.handleClick.bind(this)}>View Inventory</button>
                </Link>
            </div>

        )
    }
}

export default ViewInventory;