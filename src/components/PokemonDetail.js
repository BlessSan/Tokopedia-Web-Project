import React from "react";
import { Outlet } from "react-router-dom";

const PokemonDetail = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PokemonDetail;
