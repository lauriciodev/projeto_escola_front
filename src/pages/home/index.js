import React from "react";
import { useDispatch } from "react-redux";
import { Container, Title } from "./styled";
import * as Exemples from "../../store/modules/exemplo/actions";

export default function Home() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    dispatch(Exemples.Exemples());
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
