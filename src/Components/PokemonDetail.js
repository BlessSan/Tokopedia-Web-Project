import React from "react";
import { Outlet } from "react-router-dom";
import PokemonSearch from "./PokemonSearch";

const PokemonDetail = () => {
  return (
    <>
      <div>
        <PokemonSearch />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default PokemonDetail;
