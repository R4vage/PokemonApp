import React from "react";
import "./Footer.css"
import githubIcon from "../../assets/githubIcon.png"
import linkedinIcon from "../../assets/linkedinIcon.png"

function Footer() {
    return ( <footer className="Footer">
        <img className="footer--icon" src={githubIcon} onClick={() => window.open("https://github.com/R4vage")}/>
        <img className="footer--icon linkedin" src={linkedinIcon} onClick={ () => window.open("https://www.linkedin.com/in/julianmarc")}/>
        <img className="footer--icon" src=""/>
        
    </footer> );
}

export default Footer;