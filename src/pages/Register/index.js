import { useState } from "react";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import axios from "axios";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import { Button, Container, FormContainer, Input, Title } from "./styled";
import Loading from "../../components/load";

export default function Register() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

    if (password.length < 6 || password.length > 20) {
      formErrors = true;
      toast.error("Senha deve ter entre 6 e 20 caracteres");
    }

    if (formErrors) return;

    setIsLoading(true);

    try {
      await axios.post("http://34.95.229.193/usuarios", {
        nome,
        email,
        password,
      });
      navigate("/login");
      toast.success("conta criada com sucesso");
      setIsLoading(false);
    } catch (erro) {
      const errors = get(erro, "response.data.errors", []);
      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Criar sua conta</Title>
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
          <Button type="submit">criar conta</Button>
        </form>
      </FormContainer>
    </Container>
  );
}
