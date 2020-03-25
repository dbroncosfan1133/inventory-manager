import React from "react";
import LogoutBtn from "../logoutbtn/logoutbtn"
import "./heromain.css";
import logo from "../../LisaGrace_Logo2.png";
import Image from 'react-image-resizer';

function HeroMain() {
    return (
        <div className="hero header is-small">
            <div className="hero-body">
                <div className="navbar">
                    <div className="navbar-brand">
                    <Image
                        src={logo} alt="Logo"
                        height={ 100 }
                        width={ 350 }
                    />
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