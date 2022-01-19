import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

//! implement pagination

const POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
  limit: 10,
  offset: 0,
};

const PokemonList = () => {
  const { loading, error, data, fetchMore } = useQuery(POKEMON_LIST, {
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

  console.log("Response from server : ", data);

  const currentLength = data.pokemons ? data.pokemons.results.length : 0;
  const hasMore = data.pokemons ? data.pokemons.count > currentLength : true;

  return (
    <>
      <h1> This is Pokemon List page </h1>
      <InfiniteScroll
        dataLength={currentLength}
        next={next}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
        endMessage={<h1>End</h1>}
      >
        {data.pokemons.results.map((result) => (
          <Link to={`/PokemonDetail/${result.name}`} key={result.id}>
            <img src={result.image} alt={result.name} />
            <h1>{result.name}</h1>
          </Link>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default PokemonList;
