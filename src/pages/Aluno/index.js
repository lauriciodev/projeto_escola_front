import { get } from "lodash";
import PropTypes from "prop-types";
import { useState } from "react";
import { AlunoForm, Container, Title } from "./styled";

export default function Aluno({ match }) {
  const id = get(match, "params.id", 0);
  console.log(id);
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container>
      <Title> {id ? "Editar aluno" : "Novo Aluno"}</Title>
      <AlunoForm>
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
      </AlunoForm>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
