import React from "react";
import "./footer.css";
import logoFoot from "../../LisaGrace_WEB_Icon1.png";
import Image from "react-image-resizer";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                    <center><Image
                        src={logoFoot} alt="Logo Footer"
                        height={ 30 }
                        width={ 30 }
                    /></center>
                    
                <p>
                    <strong className = "footerName">Inventory Manager</strong> by Curtis Allen, Stephen Green, Trevor Burningham, Kellie Hunsaker.
                </p>
                
            </div>
        </footer>
    );
}

export default Footer;