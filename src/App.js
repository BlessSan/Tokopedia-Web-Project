/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Container from "./components/container";
import "./App.css";

import Menu from "./components/MenuBar";

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <Menu />
    </>
  );
}

export default App;
