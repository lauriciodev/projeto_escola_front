/* eslint-disable import/prefer-default-export */

import styled from "styled-components";
import * as color from "../../config/colors";

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
  background-color: ${color.primaryColor};
  color: white;
`;

export const AlunoForm = styled.form`
  padding: 10px;
  background-color: ${color.infoColor};
`;
