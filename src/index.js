import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from "./Components/PokemonList";
import PokemonDetail from "./Components/PokemonDetail";
import MyPokemonList from "./Components/MyPokemonList";
import PokemonCard from "./Components/PokemonCard";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/PokemonList" element={<PokemonList />} />
            <Route path="/PokemonDetail" element={<PokemonDetail />}>
              <Route path=":pokemonName" element={<PokemonCard />} />
            </Route>
            <Route path="/MyPokemonList" element={<MyPokemonList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
