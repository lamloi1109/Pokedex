import { fetchPokemonList, fetchPokemon } from "./lib/data";
import { Suspense } from "react";
import Card from "./ui/pokemons/card";

export default async function Home() {
  const data = await fetchPokemonList();
  return (
    <main className="min-h-screen min-w-screen p-24 bg-white overflow-hidden">
      <div className="grid grid-cols-4 gap-0  ">
        {data.map(async (pokemon: object) => {
          const pokemonData = await fetchPokemon(pokemon.url);
          const pokemonID = pokemonData.id;
          const pokemonName = pokemon.name;
          const pokemonHeight = pokemonData.height;
          const pokemonWeight = pokemonData.weight;

          return (
            <>
              <Suspense fallback={<p>Loading feed...</p>}>
                <Card
                  key={pokemonID}
                  pokemonID={pokemonID}
                  pokemonName={pokemonName}
                  pokemonHeight={pokemonHeight}
                  pokemonWeight={pokemonWeight}
                />
              </Suspense>
            </>
          );
        })}
      </div>
    </main>
  );
}
