import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

const PokemonCard = () => {
  const params = useParams();

  const gqlVariables = {
    name: `${params.pokemonName}`,
  };

  const { loading, error, data } = useQuery(POKEMON_DETAIL, {
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
