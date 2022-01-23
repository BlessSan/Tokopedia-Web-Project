import PokemonList from "./components/PokemonList";
import App from "./App";
import PokemonDetail from "./components/PokemonDetail";
import MyPokemonList from "./components/MyPokemonList";
import PokemonDetailCard from "./components/PokemonDetailCard";

import { Routes, Route } from "react-router-dom";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PokemonList />} />
        <Route path="pokemon-detail" element={<PokemonDetail />}>
          <Route path=":pokemonName" element={<PokemonDetailCard />} />
        </Route>
        <Route path="my-pokemon-list" element={<MyPokemonList />} />
      </Route>
    </Routes>
  );
};

export default ReactRouter;
