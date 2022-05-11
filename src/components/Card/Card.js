import React, { useEffect, useState } from "react";
import "./Card.css"
import {useFechtPokemon} from "../../hooks/useFechtPokemon"

function Card(props) {
    const index = props.index
    const extended = props.extended
    const {pokemon, pokemonSpecie, fetchPokemon, fetchSpecie} = useFechtPokemon()
   


      useEffect(() => {
        fetchPokemon(index)
        fetchSpecie(index)
      }, [index])
      console.log(index)
    return ( 
    <div className="Card">
      <div className="cardContainer" style={{background: pokemonSpecie?.color, color: ((["white","pink","yellow"].includes(pokemonSpecie.color)))? "black" : "white"}}>
        <h1 className="card--title">{pokemon?.name}</h1>
        <div className="card--imgContainer" > <img src={pokemon?.img}/></div>
        {extended && (
       <>
        <h3>{pokemonSpecie.flavor}</h3>
          <div className="statContainer" style={{color:pokemonSpecie?.color}}>
            <h3 className="stat">Height: {pokemon.height}dc</h3>
            <h3 className="stat">Weight: {pokemon.weight}hg</h3>
            <h3 className="stat">HP: {pokemon.hp}</h3>
            <h3 className="stat">Attack: {pokemon.attack}</h3>
            <h3 className="stat">Defense: {pokemon.defense}</h3>
          </div>
        </>) 
      }
      </div>
      
    </div> );
}

export default Card;