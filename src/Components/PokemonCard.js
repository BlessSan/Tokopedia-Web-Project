import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POKEMON_DETAIL } from "../graphql/queries";
import { useMyPokemonStore } from "../store/zustandStore";

const CatchPokemonButton = ({ id, img, name }) => {
  const addPokemon = useMyPokemonStore((state) => state.addPokemon);
  const [loading, setLoading] = useState(false);

  const handleCatch = () => {
    const isCaught = Math.random() < 0.5;
    setLoading(false);
    alert(isCaught);
    if (isCaught) {
      addPokemon(id, img, Math.random(), name);
    }
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(handleCatch, 1500);
  };

  return (
    <button disabled={loading} onClick={handleClick}>
      {loading ? "loading" : "catch"}
    </button>
  );
};

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
      <CatchPokemonButton
        id={data.pokemon.id}
        img={data.pokemon.sprites.front_default}
        name={data.pokemon.name}
      />
    </>
  );
};

export default PokemonCard;
