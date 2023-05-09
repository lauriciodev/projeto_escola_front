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

export const FormContainer = styled.div`
  border: 1px solid ${color.borderColor};
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 300px;
  border: 1px solid ${color.borderColor};
  background-color: transparent;
  height: 30px;
  padding-left: 3px;
  color: ${color.textColor};
  transition: all 0.3s;

  &:focus {
    border: 1px solid ${color.textColor};
  }
`;
export const Button = styled.button`
  width: 300px;
  background-color: ${color.buttonColor};
  transition: all 0.3s;

  color: ${color.textColor};

  :hover {
    background-color: ${color.borderColor};
  }
`;
