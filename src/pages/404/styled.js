import styled from "styled-components";
import { primaryDarkColor } from "../../config/colors";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 1.3rem;
    padding: 10px;
    background-color: ${primaryDarkColor};
  }
`;
