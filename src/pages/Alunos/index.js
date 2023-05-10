import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { get } from "lodash";
import { FaUser, FaEdit, FaWindowClose } from "react-icons/fa";
import { Container, ContainerAlunos, ProfilePicture, Title } from "./styled";
import Loading from "../../components/load";

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  React.useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get("http://34.95.229.193/alunos");
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);
  return (
    <Container>
      <Loading isLoading={isLoading} />
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
