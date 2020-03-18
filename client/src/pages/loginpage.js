import React from "react";
import ViewInventory from "../components/viewbtn/viewButton";
import LowInventory from "../components/lowinventory/lowInventoryBtn";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import AddNewItem from "../components/addNewItem/addNewItem";
import AddNewCategory from "../components/addNewCategory/addNewCategory";
import AddQuantity from "../components/addquantity/addquantity";
import SubQuantity from "../components/subtractquantity/subtractquantity";
// import additempage from "./additempage";
import "./mainpage.css"
import LoginEmail from "../components/loginemail/loginemail";
import LoginPass from "../components/loginpass/loginpass";

function Login() {
    return (
        <div>
            <Hero />
            <div className="container mainContain">
                <div className="columns">
                    <div className="column is-5">
                        <h1 className="is-size-3">Please Login</h1>
                    </div>
                    <div className="column is-5">
                        <LoginEmail />
                        <LoginPass />
                    </div>
                    <div className="colmun is-2"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;