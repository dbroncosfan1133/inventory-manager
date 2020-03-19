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
import LoginButton from "../components/loginButton/loginButton";

function Login() {
    return (
        <div>
            <Hero />
            <div className="container mainContain">
            
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-4">
                        <LoginEmail />
                        <LoginPass />
                    </div>
                    <div className="column"></div>
                </div>
                <div className="columns">
                <div className="column is-7"></div>
                <div className="column">
                        <LoginButton />
                    </div>
                    <div className="column"></div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default Login;