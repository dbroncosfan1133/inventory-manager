import React from "react";
import { Link } from "react-router-dom";

class SubQuantity extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/subtract"}>
                    <button className="button is-warning is-large" onClick={this.handleClick.bind(this)}>Subtract Quantity</button>
                </Link>
            </div>
        )
    }
}

export default SubQuantity;