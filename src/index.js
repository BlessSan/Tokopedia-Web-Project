import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "reactjs-popup/dist/index.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { client } from "./graphql/client";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import MyPokemonList from "./components/MyPokemonList";
import PokemonCard from "./components/PokemonDetailCard";

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
