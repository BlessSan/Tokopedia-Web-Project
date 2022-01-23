/** @jsxImportSource @emotion/react */

import { Link, useLocation, useParams } from "react-router-dom";
import { css, keyframes } from "@emotion/react";
import CatchButton from "./catchButton";

const MenuItem = ({ id, path, text, img }) => {
  const location = useLocation();
  const params = useParams();

  const moveUpKeyframe = keyframes`
  from{ transform: translateY(0%);}
  to{transform: translateY(-20%);}
  `;

  const moveDownKeyframe = keyframes`
  from{ transform: translateY(-20%);}
  to{transform: translateY(0%);}
  `;

  const moveUp = css`
    animation: ${moveUpKeyframe} 0.3s ease;
    animation-fill-mode: forwards;
  `;

  const moveDown = css`
    animation: ${moveDownKeyframe} 0.3s ease;
    animation-fill-mode: forwards;
  `;

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
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0;
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
    <div css={[menuItem, active ? moveUp : moveDown]}>
      {params.pokemonName && img ? (
        <CatchButton img={img} />
      ) : (
        <Link to={path}>
          <p css={menuText}>{text}</p>
        </Link>
      )}
    </div>
  );
};

export default MenuItem;
