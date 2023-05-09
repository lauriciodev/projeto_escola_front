import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./styled";

export default function Header() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/register">Registrar-se</Link>
      <Link to="/login">Entrar</Link>
    </Nav>
  );
}
