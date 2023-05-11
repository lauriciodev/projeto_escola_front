import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { get } from "lodash";
import {
  FaUser,
  FaEdit,
  FaWindowClose,
  FaExclamationCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Container, ContainerAlunos, ProfilePicture, Title } from "./styled";
import Loading from "../../components/load";

export default function Alunos() {
  const idState = useSelector((state) => state.auth.user.id);
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

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute("display", "block");
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    try {
      setIsLoading(true);

      if (idState) {
        await axios.delete(`http://34.95.229.193/alunos/${id}`);
        const novosAlunos = [...alunos];
        novosAlunos.splice(index, 1);
        setAlunos(novosAlunos);
        setIsLoading(false);
        toast.success("Aluno deletado com sucesso");
      } else {
        toast.error("Você precisa fazer login");
      }
    } catch (erro) {
      const status = get(erro, "response.status", 0);
      if (status === 401) {
        toast.error("Você precisa fazer login");
      } else {
        toast.error("Ocorreu um erro ao excluir aluno");
      }

      setIsLoading(false);
    }
    setIsLoading(false);
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title isRed={false}>Alunos</Title>
      <ContainerAlunos>
        {alunos.map((aluno, index) => (
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
            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={15} />
            </Link>
            <FaExclamationCircle
              size={15}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, aluno.id, index)}
            />
          </div>
        ))}
      </ContainerAlunos>
    </Container>
  );
}
