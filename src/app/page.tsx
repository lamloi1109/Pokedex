import { fetchPokemonList, fetchPokemon } from './lib/data'
import { Suspense } from 'react';
import Card from './ui/pokemons/card';

export default async function Home() {
  const data = await fetchPokemonList();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {
        data.map(async (pokemon: object) => {
          const pokemonData = await fetchPokemon(pokemon.url);
          const pokemonID = pokemonData.id;
          console.log(pokemonID);
          return (
            <>
              <Suspense fallback={<p>Loading feed...</p>}>
                <Card key={pokemonID} pokemonID={pokemonID} />
              </Suspense>
            </>
          )
        })
      }
    </main >
  )
}
