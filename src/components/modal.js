/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";
import { useMyPokemonStore } from "../store/zustandStore";
import shallow from "zustand/shallow";
import Popup from "reactjs-popup";
import { IoClose } from "react-icons/io5";
import { IoMdAlert } from "react-icons/io";
import { useParams } from "react-router-dom";

const Modal = ({ open, closeModal }) => {
  const errorMessage = css`
    color: red;
    font-size: 8px;
    margin-top: 0px;
    padding-left: 1em;
  `;

  const input = css`
    border-color: 1px black;
    font-size: 1rem;
    min-width: 100px;
    padding: 0.5rem;
    border-radius: 20px 0 0 20px;
  `;

  const button = css`
    border-color: 1px black;
    font-size: 1rem;
    font-weight: 600;
    min-width: 100px;
    padding: 0.5rem;
    border-radius: 0 20px 20px 0;
    background-color: #ffffff;
  `;

  const errorInput = css`
    border-color: red;
  `;

  const modalTitle = css`
    padding: 1em 1.5em;
    font-size: 1.25rem;
    text-align: center;
    font-weight: 600;
    line-height: normal;
  `;

  const exitButton = css`
    border: none;
    border-radius: 10px;
    background-color: #ffffff;
    position: absolute;
    right: 0;
    top: 0;
  `;

  const form = css`
    padding: 10px 10px;
  `;
  const params = useParams();
  const pokemonName = params.pokemonName;

  const [addPokemon, checkIfNicknameExist] = useMyPokemonStore(
    (state) => [state.addPokemon, state.checkIfNicknameExist],
    shallow //* fixes issue of update during render
  );
  const [error, setError] = useState(false);
  const [nickname, setNickname] = useState("");

  const handleInput = (event) => {
    setNickname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNickname("");
    const exist = checkIfNicknameExist(
      nickname === "" ? pokemonName : nickname
    );
    if (exist) {
      setError(true);
    } else {
      addPokemon(nickname === "" ? pokemonName : nickname);
      closeModal();
    }
  };
  return (
    <Popup
      closeOnDocumentClick={false}
      contentStyle={{ background: "white", borderRadius: "10px" }}
      overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
      open={open}
    >
      <div className="modal">
        <button css={exitButton} className="close" onClick={closeModal}>
          <IoClose size={"1.5em"} />
        </button>
        <div css={modalTitle}>Enter nickname for {pokemonName}</div>
        <form onSubmit={handleSubmit}>
          <div css={form}>
            <input
              type="text"
              css={[input, error && errorInput]}
              value={nickname}
              onChange={handleInput}
              onFocus={() => setError(false)}
              placeholder={pokemonName}
            />
            <input css={button} type="submit" value="Submit" />
            {error ? (
              <div css={errorMessage}>
                <IoMdAlert color="red" size={"1.5em"} /> Nickname already exists
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </Popup>
  );
};

export default Modal;
