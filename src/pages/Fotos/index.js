import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, FormContainer, Title } from "./styled";

export default function Fotos() {
  const [foto, setFoto] = useState("");
  const { id } = useParams();

  const handleChange = (e) => {
    const fotoFile = e.target.files[0];
    const fotoUrl = URL.createObjectURL(fotoFile);
    setFoto(fotoUrl);

    const formData = new FormData();
    formData.append("aluno_id", id);
    formData.append("fot", fotoFile);
  };

  return (
    <Container>
      <Title isRed={false}>Enviar foto</Title>
      <FormContainer>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="foto" /> : "Selecionar"}
          <input type="file" id="foto" onChange={handleChange} name="foto" />
        </label>
        <button type="submit">Enviar</button>
      </FormContainer>
    </Container>
  );
}
