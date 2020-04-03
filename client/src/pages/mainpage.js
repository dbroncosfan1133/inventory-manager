import React from "react";
import ViewInventory from "../components/viewbtn/viewButton";
import LowInventoryBtn from "../components/lowinventorybtn/lowInventoryBtn";
import HeroMain from "../components/heromain/heromain";
import Footer from "../components/footer/footer";
import AddItemBtn from "../components/additembtn/additembtn";
// import AddCategoryBtn from "../components/addcategorybtn/addcategorybtn";
import AddInventBtn from "../components/addinventorybtn/addinventbtn";
import SubInventBtn from "../components/subinventbtn/subinventbtn";
import "./pages.css"

function MainPage() {
    return (
        <div>
            <HeroMain />
            <div className="container mainContain">
                <div className="columns">
                    <div className="column is-6">
                        <div className="cardSmall">
                            <div className="card-body">
                                <h1 className="welcome is-size-3">Welcome, what would you like to do?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="column is-2">
                        <ViewInventory />
                        <LowInventoryBtn />
                        <AddInventBtn />
                    </div>
                    <div className="column is-2">
                        <AddItemBtn />
                        {/* <AddCategoryBtn /> */}
                        <SubInventBtn />
                    </div>
                    <div className="colmun is-2"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;