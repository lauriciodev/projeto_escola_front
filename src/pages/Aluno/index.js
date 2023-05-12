import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import axios from "axios";
import { get } from "lodash";
import { useDispatch } from "react-redux";
import { FaEdit, FaUser } from "react-icons/fa";
import { AlunoForm, Container, ProfilePicture, Title } from "./styled";
import Loading from "../../components/load";
import * as actions from "../../store/modules/auth/actions";

export default function Aluno() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState("");

  useEffect(() => {
    async function getData() {
      if (id) {
        try {
          setIsLoading(true);
          const { data } = await axios.get(`http://34.95.229.193/alunos/${id}`);
          const Foto = get(data, "fotos[0].url", "");

          setNome(data.nome);
          setSobreNome(data.sobrenome);
          setEmail(data.email);
          setFoto(Foto);
          setIsLoading(false);
        } catch (erro) {
          setIsLoading(false);
          const status = get(erro, "response.status", 0);
          const errors = get(erro, "response.data.errors", []);

          if (status === 400) {
            errors.map((error) => toast.error(error));
            navigate("/");
          }
        }
      }
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (nome < 3 || nome > 30) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 30 caracteres");
    }

    if (sobreNome < 3 || sobreNome > 30) {
      formErrors = true;
      toast.error("Sobrenome deve ter entre 3 e 30 caracteres");
    }

    if (!isEmail(email) || email < 2) {
      formErrors = true;
      toast.error("Email inválido");
    }
    if (formErrors) return;

    try {
      if (id) {
        // editando
        setIsLoading(true);
        await axios.put(`http://34.95.229.193/alunos/${id}`, {
          nome,
          sobrenome: sobreNome,
          email,
        });

        toast.success("Aluno atualizado com sucesso");
        setIsLoading(false);
      } else {
        setIsLoading(true);
        await axios.post(`http://34.95.229.193/alunos`, {
          nome,
          sobrenome: sobreNome,
          email,
        });

        toast.success("Aluno criado com sucesso com sucesso");
        setIsLoading(false);
      }
    } catch (erro) {
      setIsLoading(false);
      const status = get(erro, "response.data.errors", 0);
      const data = get(erro, "response.data", {});
      const errors = get(data, "errors", []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error("Erro desconhecido");
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title> {id ? "Editar aluno" : "Novo Aluno"}</Title>
      {id && (
        <ProfilePicture>
          {foto ? (
            <img src={foto} crossOrigin="anonymous" alt="foto-perfil" />
          ) : (
            <FaUser size={100} color="white" />
          )}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={20} />
          </Link>
        </ProfilePicture>
      )}
      <AlunoForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={sobreNome}
          onChange={(e) => setSobreNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit"> Enviar</button>
      </AlunoForm>
    </Container>
  );
}
