import React from "react";
import "./herologin.css";
import Image from "react-image-resizer";
import logo from "../../LisaGrace_Logo2.png";

function HeroLogin() {
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
                </div>
            </div>
        </div>
    );
}

export default HeroLogin;