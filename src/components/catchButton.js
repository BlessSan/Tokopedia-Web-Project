/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Modal from "./modal";
//import "reactjs-popup/dist/index.css";

const CatchButton = ({ img }) => {
  const menuText = css`
    font-size: 18px;
    font-weight: 500;
    text-align: center;
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
    } else {
      toast.error("The Pokemon ran, try again!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        closeOnClick: true,
        style: { top: "80px" },
      });
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(handleCatch, 2000);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const variant = {
    default: {
      rotate: -360,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 3,
      },
    },

    catching: {
      y: [0, -5, 0, -5, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.4,
      },
    },

    onTap: {
      scale: 0.8,
    },
  };

  return (
    <>
      <div onClick={handleClick}>
        <div css={menuText}>{loading ? "Catching" : "Catch"}</div>
        <motion.img
          variants={variant}
          animate={loading ? "catching" : "default"}
          whileTap="onTap"
          css={logo}
          src={img}
          alt="catchButton"
        />
      </div>
      <Modal open={open} closeModal={closeModal} />
    </>
  );
};

export default CatchButton;
