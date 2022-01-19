import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POKEMON_DETAIL } from "../GraphQL/queries";

const PokemonCard = () => {
  const params = useParams();

  const gqlVariables = {
    name: `${params.pokemonName}`,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  console.log("Response from server : ", data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <img src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />
      <h1>{data.pokemon.name}</h1>
    </>
  );
};

export default PokemonCard;
