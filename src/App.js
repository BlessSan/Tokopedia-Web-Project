import { Link, Outlet } from "react-router-dom";
import PokemonSearch from "./components/PokemonSearch";
import "./App.css";

function App() {
  return (
    <>
      <h1>App</h1>
      <Link to="/PokemonList">Pokemon List</Link>
      <Link to="/PokemonDetail">Pokemon Detail</Link>
      <Link to="/MyPokemonList">My Pokemon List</Link>
      <PokemonSearch />
      <Outlet />
    </>
  );
}

export default App;
