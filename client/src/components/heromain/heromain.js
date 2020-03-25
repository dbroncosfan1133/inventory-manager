import React from "react";
import LogoutBtn from "../logoutbtn/logoutbtn"
import "./heromain.css";

function HeroMain() {
    return (
        <div className="hero header is-small">
            <div className="hero-body">
                <div className="navbar">
                    <div className="navbar-brand">
                        <h1 className="navbar-item title">Inventory Manager</h1>
                        {/* logo needs to go here */}
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <LogoutBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroMain;