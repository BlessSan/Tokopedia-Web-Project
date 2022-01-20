import React, { useState, createContext, useContext } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POKEMON_DETAIL } from "../graphql/queries";
import { useMyPokemonStore } from "../store/zustandStore";
import Popup from "reactjs-popup";

const pokemonDetailsContext = createContext();

const Modal = ({ open, closeModal }) => {
  const [addPokemon, checkIfNicknameExist] = useMyPokemonStore((state) => [
    state.addPokemon,
    state.checkIfNicknameExist,
  ]);
  const {
    id,
    sprites: { front_default: img },
    name,
  } = useContext(pokemonDetailsContext);
  const [nickname, setNickname] = useState("");

  const handleInput = (event) => {
    setNickname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const exist = checkIfNicknameExist(nickname);
    console.log("nickname exist :", exist);
    addPokemon(id, img, nickname, name);
    closeModal();
  };
  return (
    <Popup open={open} closeOnDocumentClick={false} onClose={closeModal}>
      <div className="modal">
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <h1>Enter Nickname</h1>
          <input type="text" value={nickname} onChange={handleInput} />
          <input type="submit" value="enter" />
        </form>
      </div>
    </Popup>
  );
};

const CatchPokemonButton = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCatch = () => {
    const isCaught = Math.random() < 0.5;
    setLoading(false);
    console.log(isCaught);
    if (isCaught) {
      setOpen(true);
    }
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(handleCatch, 1500);
  };

  return (
    <>
      <button disabled={loading} onClick={handleClick}>
        {loading ? "loading" : "catch"}
      </button>
      <Modal open={open} closeModal={() => setOpen(false)} />
    </>
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
    <pokemonDetailsContext.Provider value={data.pokemon}>
      <img src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />
      <h1>{data.pokemon.name}</h1>
      <CatchPokemonButton
        id={data.pokemon.id}
        img={data.pokemon.sprites.front_default}
        name={data.pokemon.name}
      />
    </pokemonDetailsContext.Provider>
  );
};

export default PokemonCard;
