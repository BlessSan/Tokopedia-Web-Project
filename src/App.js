import { Link, Outlet } from "react-router-dom";
import PokemonSearch from "./components/PokemonSearch";
import Container from "./components/container";
import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <h1>App</h1>
        <Link to="/pokemon-list">Pokemon List</Link>
        <Link to="/pokemon-detail">Pokemon Detail</Link>
        <Link to="/my-pokemon-list">My Pokemon List</Link>
        <PokemonSearch />
        <PokemonList />
        <Outlet />
      </Container>
    </>
  );
}

export default App;
