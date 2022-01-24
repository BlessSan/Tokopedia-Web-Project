/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useMyPokemonStore } from "../store/zustandStore";
import PokemonListCard from "./PokemonListCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransitionVariant } from "./animationVariants";

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

  const text = css`
    text-align: center;
    margin-top: 200px;
    padding: 1em;
  `;

  const link = css`
    color: #e71a1a;
  `;

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      key="MyPokemon"
    >
      {pokemonsList.length === 0 ? (
        <div css={text}>
          <h1>It's kinda empty...</h1>
          <h1>
            Catch `em{" "}
            {
              <Link css={link} to="/">
                here!
              </Link>
            }
          </h1>
        </div>
      ) : (
        <div css={layout}>
          {pokemonsList.map((pokemon, index) => (
            <PokemonListCard key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default MyPokemonList;
