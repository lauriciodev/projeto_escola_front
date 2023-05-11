import React, { useState } from "react";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, FormContainer, Input, Title } from "./styled";
import * as actions from "../../store/modules/auth/actions";
import Loading from "../../components/load/index";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.auth.user.id);
  const nomeStorage = useSelector((state) => state.auth.user.nome);
  const emailStorage = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const created = useSelector((state) => state.auth.created);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStorage);
    setEmail(emailStorage);
  }, [nomeStorage, emailStorage, id]);

  React.useEffect(() => {
    if (created) {
      navigate("/login");
    }
  }, [created]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;
    if (nome.length < 3 || nome.length > 30) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 30 caracteres");
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Email inválido");
    }

    if (!id && (password.length < 6 || password.length > 20)) {
      formErrors = true;
      toast.error("Senha deve ter entre 6 e 20 caracteres");
    }

    if (formErrors) return;
    dispatch(actions.registerRequest({ nome, email, password, id }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? "Editar Usuario" : "Criar conta"}</Title>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">{id ? "Salvar" : "Criar conta"}</Button>
        </form>
      </FormContainer>
    </Container>
  );
}
