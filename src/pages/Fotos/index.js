import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { get } from "lodash";
import { useDispatch } from "react-redux";
import { Container, FormContainer, Title } from "./styled";
import Loading from "../../components/load/index";
import * as actions from "../../store/modules/auth/actions";

export default function Fotos() {
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();
  const [fotoToSend, setFotoToSend] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const handleChange = (e) => {
    const fotoFile = e.target.files[0];
    const fotoUrl = URL.createObjectURL(fotoFile);
    setFoto(fotoUrl);
    setFotoToSend(fotoFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("aluno_id", id);
    formData.append("foto", fotoToSend);

    try {
      setIsLoading(true);
      await axios.post("http://34.95.229.193/fotos/", formData, {
        headers: {
          "Content-Type": "multipart/from-data",
        },
      });
      navigate(`/aluno/${id}/edit`);
      toast.success("Foto enviada com sucesso");
      setIsLoading(false);
    } catch (erro) {
      setIsLoading(false);
      const { status } = get(erro, "response", "");
      toast.error("Erro ao enviar foto");

      if (status === 401) {
        dispatch(actions.loginFailure());
        toast.error("Você precisa fazer login");
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title isRed={false}>Enviar foto</Title>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="foto" /> : "Selecionar"}
          <input type="file" id="foto" onChange={handleChange} name="foto" />
        </label>
        <button type="submit">Enviar</button>
      </FormContainer>
    </Container>
  );
}
