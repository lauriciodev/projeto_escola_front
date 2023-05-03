import React from "react";
import axios from "axios";
import { Container, Title } from "./styled";

export default function Home() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get("http://34.95.229.193/alunos");
      // eslint-disable-next-line
      console.log(response);
    }

    getData();
  }, []);
  return (
    <Container>
      <Title>pagina home</Title>
    </Container>
  );
}
