import React from "react";
import ViewInventory from "../components/viewbtn/viewButton";
import LowInventory from "../components/lowinventory/lowInventoryBtn";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import AddNewItem from "../components/addNewItem/addNewItem";
import AddNewCategory from "../components/addNewCategory/addNewCategory";
import additempage from "./additempage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import App from "../components/inventorytable/inventorytable"

function MainPage() {
    return (
        <Router>
            <div>
                <Hero />
                <div className="container">
                    <div className="columns">
                        <div className="column is-3">
                            <ViewInventory />
                            <LowInventory />
                        </div>
                        <div className="column is-3">
                            <AddNewItem />
                            <AddNewCategory />
                        </div>
                        <div className="column is-6">
                            <App />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default MainPage;