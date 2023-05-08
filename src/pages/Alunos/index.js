import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { get } from "lodash";
import { FaUser, FaEdit, FaWindowClose } from "react-icons/fa";
import { Container, ContainerAlunos, ProfilePicture, Title } from "./styled";

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
            <ProfilePicture>
              {get(aluno, "fotos[0].url", false) ? (
                <img
                  src={aluno.fotos[0].url}
                  crossOrigin="anonymous"
                  alt="img"
                />
              ) : (
                <FaUser size={50} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={15} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={15} />
            </Link>
          </div>
        ))}
      </ContainerAlunos>
    </Container>
  );
}
