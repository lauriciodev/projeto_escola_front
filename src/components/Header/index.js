import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "./styled";
import * as actions from "../../store/modules/auth/actions";

export default function Header() {
  const logado = useSelector((state) => state.auth.logado);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    navigate("/");
  };
  return (
    <Nav>
      <Link to="/">Home</Link>
      {logado && <Link to="/aluno/}">Novo Aluno</Link>}
      <Link to="/register">{logado ? "Editar conta" : "Criar conta"}</Link>
      {logado ? (
        <Link onClick={handleLogout} to="/logout">
          Sair
        </Link>
      ) : (
        <Link to="/login">Entrar</Link>
      )}
    </Nav>
  );
}
