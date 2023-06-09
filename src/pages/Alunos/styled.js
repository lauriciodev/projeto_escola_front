/* eslint-disable import/prefer-default-export */

import styled from "styled-components";
import * as color from "../../config/colors";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  color: white;
`;

export const ContainerAlunos = styled.div`
  div {
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    color: ${color.textColor};
    gap: 15px;
    padding: 5px;
    border: 1px solid ${color.borderColor};

    a {
      background-color: ${color.buttonColor};
      color: ${color.textColor};
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
    }
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 50px;
    height: 50px;
    border: 1px solid ${color.primaryDarkColor};
  }
`;
