import React from "react";
import HeroLogin from "../components/herologin/herologin";
import Footer from "../components/footer/footer";
import "./pages.css"
import LoginEmail from "../components/loginemail/loginemail";
import LoginPass from "../components/loginpass/loginpass";
import LoginButton from "../components/loginButton/loginButton";

function Login() {
    return (
        <div>
            <HeroLogin />
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