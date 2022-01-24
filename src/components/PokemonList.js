/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { GET_POKEMON_LIST } from "../graphql/queries";
import PokemonListCard from "./PokemonListCard";
import { motion } from "framer-motion";
import { pageTransitionVariant } from "./animationVariants";

const gqlVariables = {
  limit: 20,
  offset: 0,
};

const PokemonList = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMON_LIST, {
    variables: gqlVariables,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const next = () => {
    fetchMore({
      variables: {
        offset: data.pokemons.results.length,
      },
    });
  };

  const dataLength = data.pokemons ? data.pokemons.results.length : 0;
  const hasMore = data.pokemons ? data.pokemons.count > dataLength : true;

  const layout = css`
    margin-top: 1em;
    padding: 0.5em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(1, 1fr);
    }
    gap: 1em;
  `;

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      key="PokemonList"
    >
      <InfiniteScroll
        dataLength={dataLength}
        next={next}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
        endMessage={<h1>End</h1>}
        css={layout}
      >
        {data.pokemons.results.map((pokemon) => (
          <Link to={`/pokemon-detail/${pokemon.name}`} key={pokemon.id}>
            <PokemonListCard pokemon={pokemon} />
          </Link>
        ))}
      </InfiniteScroll>
    </motion.div>
  );
};
export default PokemonList;
