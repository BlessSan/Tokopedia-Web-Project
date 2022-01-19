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

//* https://github.com/apollographql/apollo-client/blob/main/src/utilities/policies/pagination.ts#L33-L49
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: {
          keyArgs: false,
          merge(existing, incoming, { args }) {
            if (!existing) return incoming;
            const merged = existing.results.slice(0);
            if (args) {
              // Assume an offset of 0 if args.offset omitted.
              const { offset = 0 } = args;
              for (let i = 0; i < incoming.results.length; ++i) {
                merged[offset + i] = incoming.results[i];
              }
            } else {
              // It's unusual (probably a mistake) for a paginated field not
              // to receive any arguments, so you might prefer to throw an
              // exception here, instead of recovering by appending incoming
              // onto the existing array.
              merged.push.apply(merged, incoming);
            }
            return { ...existing, results: merged };
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app",
  cache,
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
