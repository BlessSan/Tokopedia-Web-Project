/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useMyPokemonStore } from "../store/zustandStore";
import PokemonListCard from "./PokemonListCard";
import Container from "./container";

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
    <Container>
      <div css={layout}>
        {pokemonsList.map((pokemon, index) => (
          <div key={index}>
            <PokemonListCard pokemon={pokemon} />
            <button onClick={() => removePokemon(pokemon.index)}>
              Release
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyPokemonList;
