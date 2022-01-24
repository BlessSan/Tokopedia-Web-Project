import PokemonList from "./components/PokemonList";
import App from "./App";
import PokemonDetail from "./components/PokemonDetail";
import MyPokemonList from "./components/MyPokemonList";
import PokemonDetailCard from "./components/PokemonDetailCard";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PokemonSearch from "./components/PokemonSearch";
import { AnimatePresence } from "framer-motion";

const AnimatedRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<PokemonList />} />
          <Route path="pokemon-detail" element={<PokemonDetail />}>
            <Route index element={<PokemonSearch />} />
            <Route path=":pokemonName" element={<PokemonDetailCard />} />
          </Route>
          <Route path="my-pokemon-list" element={<MyPokemonList />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRouter;
