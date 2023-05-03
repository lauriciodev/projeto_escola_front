import { toast } from "react-toastify";
import { Container, Title } from "./styled";

export default function Login() {
  const notify = () => toast.success("logado com sucesso");

  return (
    <Container>
      <Title isRed={false}>Login</Title>
      <button type="button" onClick={notify}>
        Entrar
      </button>
    </Container>
  );
}
