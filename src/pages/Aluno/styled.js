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
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${color.borderColor};

  input {
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
  }
`;

export const ProfilePicture = styled.div`
  padding: 10px;
  border: 1px solid ${color.borderColor};
  position: relative;

  img {
    width: 100px;
    height: 100px;
  }

  a {
    position: absolute;
    background-color: ${color.buttonColor};
    bottom: 14px;
    color: ${color.textColor};
    right: 8px;
    padding: 4px;
  }
`;
