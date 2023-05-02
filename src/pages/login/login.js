import { Container, Title } from "./styled";

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>Login</Title>
      <button type="submit">Entrar</button>
    </Container>
  );
}
