import React from "react";
import axios from "axios";
import { Container, ContainerAlunos, Title } from "./styled";

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get("http://34.95.229.193/alunos");
      setAlunos(response.data);
    }
    getData();
  }, []);
  return (
    <Container>
      <Title isRed={false}>Alunos</Title>
      <ContainerAlunos>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <p>{aluno.nome}</p>
            <img
              src="https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg"
              alt="img"
            />
          </div>
        ))}
      </ContainerAlunos>
    </Container>
  );
}
