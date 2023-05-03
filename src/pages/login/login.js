import { ToastContainer, toast } from "react-toastify";
import { Container, Title } from "./styled";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const notify = () => toast("Faça login!");

  return (
    <Container>
      <Title isRed={false}>Login</Title>
      <button type="button" onClick={notify}>
        Entrar
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Container>
  );
}
