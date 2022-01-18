import { gql, useQuery } from "@apollo/client";
import React from "react";

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
  const { loading, error, data } = useQuery(POKEMON_LIST, {
    variables: gqlVariables,
  });

  console.log("Response from server : ", data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <>
      <h1> This is Pokemon List page </h1>
      {data.pokemons.results.map((result) => (
        <div key={result.id}>
          <img src={result.image} alt={result.name} />
          <h1>{result.name}</h1>
        </div>
      ))}
    </>
  );
};

export default PokemonList;
