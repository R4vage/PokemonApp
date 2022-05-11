import { useState } from "react";

export function useFechtPokemon () {
    const [pokemon, setPokemon] = useState({});
    const [pokemonSpecie, setPokemonSpecie] = useState({});
    const fetchPokemon = async (id) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();  
      console.log(data)
      const pokemon = {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        imgCvg: data.sprites.other.dream_world.front_default, // no se cual de los dos voy a usar. 
        name: data.name.toUpperCase(), //pos... el nombre, que esperas?
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        weight: data.weight,
        height: data.height
      };
        console.log(pokemon)
         setPokemon(pokemon)
    } catch (error) {
      console.log(error);
    }

  };

  const fetchSpecie = async (id) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const data = await res.json();      
      const specie = { // aparentemente la data importante acerca del pokemon está adentro de la especie, en donde enmarca al pokemon y su evolución y devolucion. No miraba pokemon de chico, no me juzguen
        color: data.color?.name, // color, usado para darle color al background
        flavor: (data.flavor_text_entries[1].flavor_text + " " + data.flavor_text_entries[2].flavor_text + " " + data.flavor_text_entries[4].flavor_text).replace(/\n/g, " ").replace(/\f/g, " ").replace(/POKéMON/g, "pokemon"), //texto casual o de adorno. Simil descripción
        habitat: data.habitat.name, //nombre del habitat, seguramente lo use para traerme alguna imagen del background
        legendary: data.is_legendary // para saber si es legendario
      };
         setPokemonSpecie(specie)
    } catch (error) {
      console.log(error);
    }

  };

    return { pokemon, pokemonSpecie, fetchPokemon, fetchSpecie }
}