import styled from "styled-components";
import { primaryDarkColor } from "../../config/colors";

export const Nav = styled.nav`
  background-color: ${primaryDarkColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    color: white;
  }
`;
