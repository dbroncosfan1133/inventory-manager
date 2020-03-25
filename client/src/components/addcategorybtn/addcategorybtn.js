import React from "react";
import { Link } from "react-router-dom";
import "./addcategorybtn.css";

class AddCategoryBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/addnewcategory"}>
                    <button className="button cat is-large" onClick={this.handleClick.bind(this)}>Add Category</button>
                </Link>
            </div>
        )
    }
}

export default AddCategoryBtn;