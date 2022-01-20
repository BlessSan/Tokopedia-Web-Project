import React from "react";
import { useMyPokemonStore } from "../store/zustandStore";

const MyPokemonList = () => {
  const [pokemonsList, removePokemon, getPokemonCount] = useMyPokemonStore(
    (state) => [state.pokemonsList, state.removePokemon, state.getPokemonCount]
  );
  return (
    <>
      {pokemonsList.map((pokemon) => (
        <div key={pokemon.index}>
          <img src={pokemon.image} alt={pokemon.name} />
          <h1>{pokemon.nickname}</h1>
          <h2>{pokemon.name}</h2>
          <h1>{getPokemonCount(pokemon.id)}</h1>
          <button onClick={() => removePokemon(pokemon.index)}>remove</button>
        </div>
      ))}
    </>
  );
};

export default MyPokemonList;
