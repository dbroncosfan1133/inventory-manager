import React from "react";
import { Link } from "react-router-dom";

class ViewInventory extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (

            <div className="buttons">
                <Link to={"/viewinventory"}>
                    <button className="button is-link is-large" onClick={this.handleClick.bind(this)}>View Inventory</button>
                </Link>
            </div>

        )
    }
}

export default ViewInventory;