import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonSearch = () => {
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

export default PokemonSearch;
