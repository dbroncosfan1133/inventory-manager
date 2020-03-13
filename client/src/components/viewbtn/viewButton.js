import React from "react";

function ViewInventory (props) {
    return (
        <div className="buttons">
            <button className="button is-link is-large" {...props}>View Inventory</button>
        </div>
    );
}

export default ViewInventory;