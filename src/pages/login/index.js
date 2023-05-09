import { useState } from "react";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import { useDispatch } from "react-redux";
import { Button, Container, FormContainer, Input, Title } from "./styled";
import * as actions from "../../store/modules/auth/actions";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Email inválido");
    }

    if (password.length < 6 || password.length > 20) {
      formErrors = true;
      toast.error("Senha deve ter entre 6 e 20 caracteres");
    }

    if (formErrors) return;
    dispatch(actions.loginRequest({ email, password }));
  };
  return (
    <Container>
      <Title isRed={false}>Login</Title>
      <FormContainer>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Entrar</Button>
        </form>
      </FormContainer>
    </Container>
  );
}
