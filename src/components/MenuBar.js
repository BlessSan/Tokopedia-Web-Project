/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import MenuItem from "./menuItem";

const Menu = () => {
  const layout = css`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    z-index: 1000;
  `;

  const menu = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 785px;
    height: 100%;
    margin: 0px auto;
  `;

  const menuList = [
    { path: "/", text: "Pokemon List" },
    {
      path: "/pokemon-detail",
      text: "Pokemon Detail",
      img: "/assets/pokeball_catchButton.png",
    },
    { path: "/my-pokemon-list", text: "My Pokemon List" },
  ];

  return (
    <div css={layout}>
      <div css={menu}>
        {menuList.map((menuItem, index) => (
          <MenuItem
            key={index}
            id={index}
            path={menuItem.path}
            text={menuItem.text}
            img={menuItem.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
