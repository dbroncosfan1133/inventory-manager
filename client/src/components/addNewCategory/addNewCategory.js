import React from "react";

function AddNewCategory (props) {
    return (
        <div className="buttons">
            <button className="button is-link is-large" {...props}>Add Category</button>
        </div>
    );
}

export default AddNewCategory;