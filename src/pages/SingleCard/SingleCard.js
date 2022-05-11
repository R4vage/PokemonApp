import React from "react";
import { useParams, useSearchParams } from "react-router-dom"
import { Footer, NavBar, Card } from "../../components";
import "./SingleCard.css"

function SingleCard() {
    const params = useParams();


    return ( 
        <>
            <NavBar/>
                <div className="SingleCard">
                    <Card index={params.pokemonId} extended={true}/>
                </div>
            <Footer/>
        </>
    
    );
}

export default SingleCard;