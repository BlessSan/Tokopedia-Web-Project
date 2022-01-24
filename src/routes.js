import PokemonList from "./components/PokemonList";
import App from "./App";
import PokemonDetail from "./components/PokemonDetail";
import MyPokemonList from "./components/MyPokemonList";
import PokemonDetailCard from "./components/PokemonDetailCard";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PokemonSearch from "./components/PokemonSearch";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PokemonList />} />
          <Route path="pokemon-detail" element={<PokemonDetail />}>
            <Route index element={<PokemonSearch />} />
            <Route path=":pokemonName" element={<PokemonDetailCard />} />
          </Route>
          <Route path="my-pokemon-list" element={<MyPokemonList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouter;
