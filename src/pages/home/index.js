import React from "react";
import { useDispatch } from "react-redux";
import { Container, Title } from "./styled";

export default function Home() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    dispatch({
      type: "BOTAO__CLICADO",
      payload: { nome: "lauricio" },
    });
  };

  return (
    <Container>
      <Title>pagina home</Title>
      <button type="button" onClick={handleClick}>
        Testar algo
      </button>
    </Container>
  );
}
