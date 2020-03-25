import React from "react";
import { Link } from "react-router-dom";
import "./lowinventoryBtn.css";


class LowInventoryBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/lowinventory"}>
                    <button className="button low is-large" onClick={this.handleClick.bind(this)}>Low Inventory</button>
                </Link>
            </div>
        )
    }
}

export default LowInventoryBtn;