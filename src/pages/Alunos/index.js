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
              src="http://34.95.229.193/images/1682476119349_12197.jpg"
              alt="img"
            />
          </div>
        ))}
      </ContainerAlunos>
    </Container>
  );
}
