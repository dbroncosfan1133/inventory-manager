import React from "react";
import BackButton from "../components/backbutton/backbutton";
import Hero from "../components/hero/hero";
// import Footer from "../components/footer/footer";
import AddNewItem from "../components/addNewItem/addNewItem";
import AddQuantity from "../components/addquantity/addquantity";
import SubQuantity from "../components/subtractquantity/subtractquantity";
import App from "../components/inventorytable/inventorytable";
import "./mainpage.css"

function InventoryPage() {
    return (
        <div>
            <Hero />
            <div className="container mainContain">
                <h1 className="is-size-1">View Inventory</h1>
                <hr />
                <div className="columns">
                    <div className="column is-6">
                        <App />
                    </div>
                    <div className="column is-3">
                        <AddQuantity />
                        <SubQuantity />
                    </div>
                    <div className="column is-3">
                        <AddNewItem />
                        <BackButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryPage;