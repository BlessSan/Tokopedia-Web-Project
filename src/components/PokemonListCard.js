/** @jsxImportSource @emotion/react */
import { useMyPokemonStore } from "../store/zustandStore";
import { css } from "@emotion/react";

const PokemonListCard = ({ pokemon }) => {
  const getPokemonCount = useMyPokemonStore((state) => state.getPokemonCount);
  const formatName = (name) => {
    return name.split("-")[0];
  };

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
    background-color: grey;
  `;

  const name = css`
    margin-top: 0;
    font-weight: 600;
    font-size: 24px;
    word-wrap: break-word;
    text-align: center;
    text-transform: capitalize;
  `;

  const nameAlt = css`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 12px;
    word-wrap: break-word;
    text-align: center;
    text-transform: capitalize;
  `;

  const nickname = css`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 24px;
    word-wrap: break-word;
    text-align: center;
    text-transform: capitalize;
  `;

  const ownedNumber = css`
    position: relative;
    top: -18px;
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

  return (
    <div css={card}>
      <img css={image} src={pokemon.image} alt={pokemon.name} />
      {pokemon.nickname ? (
        <div>
          <p css={nickname}>{pokemon.nickname}</p>
          <p css={nameAlt}>{`(${formatName(pokemon.name)})`}</p>
        </div>
      ) : (
        <p css={name}>{formatName(pokemon.name)}</p>
      )}
      <div css={pokeballContainer}>
        <img
          css={pokeball}
          src={
            getPokemonCount(pokemon.id)
              ? "./assets/pokeball_filled.png"
              : "./assets/pokeball_hollow.png"
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
