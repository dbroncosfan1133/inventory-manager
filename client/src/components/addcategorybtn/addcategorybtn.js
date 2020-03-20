import React from "react";
import { Link } from "react-router-dom";

class AddCategoryBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/addnewcategory"}>
                    <button className="button is-link is-large" onClick={this.handleClick.bind(this)}>Add Category</button>
                </Link>
            </div>
        )
    }
}

export default AddCategoryBtn;