import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const InputBox = () => {
  const [pokemonName, setPokemonName] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/PokemonDetail/${pokemonName.toLowerCase()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Search for pokemon</h1>
      <input
        type="text"
        value={pokemonName}
        onChange={handleInput}
        placeholder="e.g. bulbasaur"
      />
      <input type="submit" value="search" />
    </form>
  );
};

const PokemonDetail = () => {
  return (
    <>
      <div>
        <InputBox />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default PokemonDetail;
