import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>App</h1>
      <Link to="/PokemonList">Pokemon List</Link>
      <Link to="/PokemonDetail">Pokemon Detail</Link>
      <Link to="/MyPokemonList">My Pokemon List</Link>
      <Outlet />
    </>
  );
}

export default App;
