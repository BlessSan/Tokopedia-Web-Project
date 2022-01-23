import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./container";

const PokemonDetail = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default PokemonDetail;
