import React from "react";

function LowInventory (props) {
    return (
        <div className="buttons">
            <button className="button is-link is-large" {...props}>Low Inventory</button>
        </div>
    );
}

export default LowInventory;