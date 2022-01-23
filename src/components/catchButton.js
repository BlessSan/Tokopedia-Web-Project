/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useMyPokemonStore } from "../store/zustandStore";
import Popup from "reactjs-popup";
import shallow from "zustand/shallow";

const Modal = ({ open, closeModal }) => {
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
    const exist = checkIfNicknameExist(nickname);
    if (exist) {
      setError(true);
    } else {
      addPokemon(nickname);
      closeModal();
    }
  };
  return (
    <Popup open={open} closeOnDocumentClick={false}>
      <div className="modal">
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <h1>Enter Nickname</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nickname}
            onChange={handleInput}
            onFocus={() => setError(false)}
          />
          {error ? (
            <h3>nickname already exist, please choose another one</h3>
          ) : null}
          <input type="submit" value="enter" />
        </form>
      </div>
    </Popup>
  );
};

const CatchButton = ({ img }) => {
  const menuText = css`
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0;
  `;

  const logo = css`
    height: 50%;
    width: 50%;
    object-fit: cover;
  `;

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

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(handleCatch, 1500);
  };

  return (
    <>
      <div onClick={handleClick}>
        <p css={menuText}>{loading ? "Loading" : "Catch"}</p>
        <img css={logo} src={img} alt="catchButton" />
      </div>
      <Modal open={open} closeModal={() => setOpen(false)} />
    </>
  );
};

export default CatchButton;
