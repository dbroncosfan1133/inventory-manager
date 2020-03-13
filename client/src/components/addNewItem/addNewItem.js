import React from "react";

function AddNewItem (props) {
    return (
        <div className="buttons">
            <button className="button is-link is-large" {...props}>Add New Item</button>
        </div>
    );
}

export default AddNewItem;