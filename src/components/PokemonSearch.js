/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonSearch = () => {
  const container = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
  `;

  const form = css``;

  const input = css`
    border-color: 1px black;
    border-radius: 10px;
    font-size: 1rem;
    min-width: 100px;
    padding: 0.5rem;
    border-radius: 20px 0 0 20px;
  `;

  const button = css`
    border-color: 1px black;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    min-width: 100px;
    padding: 0.5rem;
    border-radius: 0 20px 20px 0;
    background-color: #ffffff;
  `;

  const [pokemonName, setPokemonName] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/pokemon-detail/${pokemonName.toLowerCase()}`);
  };

  return (
    <div css={container}>
      <form css={form} onSubmit={handleSubmit}>
        <h1>Search for Pokémon</h1>
        <input
          css={input}
          type="text"
          value={pokemonName}
          onChange={handleInput}
          placeholder="e.g. bulbasaur"
        />
        <input css={button} type="submit" value="search" />
      </form>
    </div>
  );
};

export default PokemonSearch;
