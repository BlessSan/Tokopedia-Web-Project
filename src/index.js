import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { client } from "./graphql/client";
import AnimatedRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AnimatedRouter />
        <ToastContainer />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
