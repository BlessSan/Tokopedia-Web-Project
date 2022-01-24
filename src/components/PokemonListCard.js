/** @jsxImportSource @emotion/react */

import { useMyPokemonStore } from "../store/zustandStore";
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";

const PokemonListCard = ({ pokemon }) => {
  const getPokemonCount = useMyPokemonStore((state) => state.getPokemonCount);

  const card = css`
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 900px) {
      max-width: 500px;
    }
    padding: 0.5em;
    border-radius: 500px;
    border-color: black;
    border-style: solid;
    border-width: thin;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: #f1e5d8;
  `;

  const name = css`
    margin-top: 0;
    font-weight: 600;
    font-size: 24px;
    word-wrap: break-word;
    text-transform: capitalize;
  `;

  const nameAlt = css`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 12px;
    word-wrap: break-word;
    text-transform: capitalize;
  `;

  const nickname = css`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 24px;
    word-wrap: break-word;
    text-transform: capitalize;
  `;

  const ownedNumber = css`
    position: relative;
    top: -16px;
    right: 10px;
    font-weight: 500;
    font-size: 14px;
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

  const releaseButton = css`
    display: block;
    position: relative;
    bottom: -15px;
    background-color: #fb0808;
    border-radius: 10px;
    border: 4px double #cccccc;
    color: #eeeeee;
    text-align: center;
    font-size: 6px;
    width: 100px;
    cursor: pointer;
    margin: 0 auto;
  `;

  const wrapper = css`
    text-align: center;
  `;
  const removePokemon = useMyPokemonStore((state) => state.removePokemon);
  const location = useLocation();
  const isInMyPokemonList = location.pathname === "/my-pokemon-list";

  return (
    <div key={pokemon.index} css={card}>
      <img css={image} src={pokemon.image} alt={pokemon.name} />
      <div css={wrapper}>
        {pokemon.nickname ? (
          <div>
            <p css={nickname}>{pokemon.nickname}</p>
            <p css={nameAlt}>{`(${pokemon.name})`}</p>
          </div>
        ) : (
          <p css={name}>{pokemon.name}</p>
        )}
        {isInMyPokemonList ? (
          <button
            css={releaseButton}
            onClick={() => removePokemon(pokemon.index)}
          >
            Release
          </button>
        ) : null}
      </div>
      <div css={pokeballContainer}>
        <img
          css={pokeball}
          src={
            getPokemonCount(pokemon.id)
              ? "/assets/pokeball_filled.png"
              : "/assets/pokeball_hollow.png"
          }
          alt="ownStatus"
        />
        <p css={ownedNumber}>
          {getPokemonCount(pokemon.id)
            ? `Owned: ${getPokemonCount(pokemon.id)}`
            : null}
        </p>
      </div>
    </div>
  );
};

export default PokemonListCard;
