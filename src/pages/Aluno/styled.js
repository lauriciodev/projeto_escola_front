/* eslint-disable import/prefer-default-export */

import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  background-color: ${primaryColor};
  color: white;
`;
