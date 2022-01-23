/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useMyPokemonStore } from "../store/zustandStore";
import PokemonListCard from "./PokemonListCard";
import Container from "./container";
import { AnimatePresence } from "framer-motion";

const MyPokemonList = () => {
  const [pokemonsList] = useMyPokemonStore((state) => [state.pokemonsList]);

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
        <AnimatePresence initial={false}>
          {pokemonsList.map((pokemon, index) => (
            <PokemonListCard key={index} pokemon={pokemon} />
          ))}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default MyPokemonList;
