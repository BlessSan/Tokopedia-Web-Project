/** @jsxImportSource @emotion/react */

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POKEMON_DETAIL } from "../graphql/queries";
import { useMyPokemonStore } from "../store/zustandStore";
import { css } from "@emotion/react";
import shallow from "zustand/shallow";

const PokemonDetailCard = () => {
  const card = css`
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
    border-radius: 0 0 50px 50px;
    border-color: black;
    border-style: solid;
    border-width: thin;
    background-color: #f1e5d8;
  `;

  const name = css`
    margin-top: 0;
    font-weight: 600;
    font-size: 24px;
    word-wrap: break-word;
    text-align: center;
    text-transform: capitalize;
  `;

  const ownedNumber = css`
    position: relative;
    top: -18px;
    right: 10px;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 0;
  `;

  const image = css`
    height: 96px;
    width: 96px;
    padding: 8px;
    border-radius: 500px;
    border-color: black;
    border-style: solid;
    background-color: white;
  `;

  const pokeball = css`
    height: 96px;
    width: 96px;
  `;

  const pokeballContainer = css`
    height: 96px;
    width: 96px;
  `;

  const movesContainer = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (min-width: 700px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 970px) {
      grid-template-columns: repeat(4, 1fr);
    }
    gap: 5px;
    padding: 1em;
    min-height: 100px;
    max-height: 80vh;
    overflow-y: auto;
  `;

  const moveContainer = css`
    border: 2px solid gray;
    text-transform: capitalize;
    border-radius: 10px;
    padding: 0.5em;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
  `;

  const params = useParams();

  const [getPokemonCount, setPokemonDetail] = useMyPokemonStore(
    (state) => [state.getPokemonCount, state.setPokemonDetail],
    shallow //* fixes infinite render
  );

  const gqlVariables = {
    name: `${params.pokemonName}`,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  setPokemonDetail(
    data.pokemon.id,
    data.pokemon.sprites.front_default,
    data.pokemon.name
  );
  return (
    <>
      <div css={card}>
        <img
          css={image}
          src={data.pokemon.sprites.front_default}
          alt={data.pokemon.name}
        />
        <p css={name}>{data.pokemon.name}</p>
        <div css={pokeballContainer}>
          <img
            css={pokeball}
            src={
              getPokemonCount(data.pokemon.id)
                ? "/assets/pokeball_filled.png"
                : "/assets/pokeball_hollow.png"
            }
            alt="ownStatus"
          />
          <p css={ownedNumber}>
            {getPokemonCount(data.pokemon.id)
              ? `Owned: ${getPokemonCount(data.pokemon.id)}`
              : null}
          </p>
        </div>
      </div>
      <div css={movesContainer}>
        {data.pokemon.moves.map((move, index) => (
          <p key={index} css={moveContainer}>
            {move.move.name}
          </p>
        ))}
      </div>
    </>
  );
};

export default PokemonDetailCard;
