/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { useMyPokemonStore } from "../store/zustandStore";
import PokemonListCard from "./PokemonListCard";

const MyPokemonList = () => {
  const [pokemonsList, removePokemon] = useMyPokemonStore((state) => [
    state.pokemonsList,
    state.removePokemon,
  ]);

  const layout = css`
    margin-top: 1em;
    padding: 0.5em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
    gap: 1em;
  `;

  return (
    <div css={layout}>
      {pokemonsList.map((pokemon) => (
        <div key={pokemon.index}>
          <PokemonListCard pokemon={pokemon} />
          <button onClick={() => removePokemon(pokemon.index)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default MyPokemonList;
