import { NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER } from "next/dist/lib/constants";
import { pokemon } from "./definitions";

export async function fetchPokemonList(limit = 20) {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const result = await data.json();
        return result.results;
    } catch (error) {
        console.log(error);
    }
}


export async function fetchPokemon(pokemonURL) {
    try {
        const data = await fetch(pokemonURL);
        const pokemonData = await data.json();
        return pokemonData;
    } catch (error) {
        console.log(error);
    }

}

