import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav } from "./styled";

export default function Header() {
  // eslint-disable-next-line
  const logged = useSelector((state) => state.exemple);
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/privada">Rota privada</Link>
      {logged.logado ? (
        <Link to="/ss">Sair</Link>
      ) : (
        <Link to="/login">Entrar</Link>
      )}
    </Nav>
  );
}
