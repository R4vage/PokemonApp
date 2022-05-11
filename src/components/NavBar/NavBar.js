import React, { useContext } from "react";
import "./NavBar.css";
import pokeball from "../../assets/Pokeball.png"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function NavBar() {
    const { onLogout } = useContext(UserContext)
    const navigate = useNavigate();
    
    function handleClick(){
        return () => {
            navigate(`/`);
          }
    }
    return ( 
    <nav>
        <div className="navBar--logoContainer" onClick={handleClick()}>
            <img src={pokeball} className="nav--logo"/>
            <h3 className="nav--title title">Pokedex</h3>
        </div>
        <button className="navBar--logout" onClick={()=> (onLogout() & handleClick())}>Sign Out</button>

    </nav> );
}

export default NavBar;