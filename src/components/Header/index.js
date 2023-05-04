import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav } from "./styled";

export default function Header() {
  // eslint-disable-next-line
  const logged = useSelector((state) => console.log(state));
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/login">Entrar</Link>
      <Link to="/ss">Sair</Link>
    </Nav>
  );
}
