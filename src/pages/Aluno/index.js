import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import { AlunoForm, Container, Title } from "./styled";

export default function Aluno() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
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

    formErrors = true;
  };

  return (
    <Container>
      <Title> {id ? "Editar aluno" : "Novo Aluno"}</Title>
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
