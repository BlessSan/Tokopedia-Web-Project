/** @jsxImportSource @emotion/react */

import { Link, useLocation, useParams } from "react-router-dom";
import { css } from "@emotion/react";
import CatchButton from "./catchButton";
import { motion } from "framer-motion";
import { menuButtonVariant } from "./animationVariants";

const MenuItem = ({ id, path, text, img }) => {
  const location = useLocation();
  const params = useParams();

  const menuItem = css`
    border-color: black;
    background-color: #e71a1a;
    border-radius: 20px 20px 0 0;
    text-align: center;
    max-width: 262px;
    min-width: 10px;
    height: 100%;
    margin-top: 20px;
  `;
  const menuText = css`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0;
    padding: 0.2em;
  `;

  const formatPath = (path) => {
    const result = path.slice(0, path.lastIndexOf("/"));
    if (result) {
      return result;
    } else {
      return path;
    }
  };
  const active = formatPath(location.pathname) === path;

  return (
    <motion.div
      variants={menuButtonVariant}
      initial="initial"
      animate={active && "selected"}
      exit="initial"
      css={menuItem}
    >
      {params.pokemonName && img ? (
        <CatchButton img={img} />
      ) : (
        <Link to={path}>
          <p css={menuText}>{text}</p>
        </Link>
      )}
    </motion.div>
  );
};

export default MenuItem;
