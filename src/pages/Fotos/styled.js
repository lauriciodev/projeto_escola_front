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
  color: ${color.textColor};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  label {
    width: 230px;
    height: 230px;
    padding: 4px;
    border: 1px solid ${color.borderColor};
    display: block;
    line-height: 230px;
    text-align: center;
    color: ${color.textColor};

    img {
      width: 100%;
      height: 100%;
    }
  }

  input {
    display: none;
  }
`;
