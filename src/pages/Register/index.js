import { Button, Container, FormContainer, Input, Title } from "./styled";

export default function Register() {
  return (
    <Container>
      <Title>Criar sua conta</Title>
      <FormContainer>
        <form>
          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit">criar conta</Button>
        </form>
      </FormContainer>
    </Container>
  );
}
