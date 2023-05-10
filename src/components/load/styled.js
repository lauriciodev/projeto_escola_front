import styled, { keyframes } from "styled-components";
import * as color from "../../config/colors";

const load = keyframes`
0% {
      transform: rotateZ(0deg);
    }

    50% {
      transform: rotateZ(360deg);

    }
    51% {
      transform: rotateZ(0deg);

    }
    100% {
      transform: rotateZ(360deg);

    }
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${color.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Load = styled.span`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: ${color.primaryColor};
  border: 1px solid ${color.borderColor};
  transition: all 0.4s;
  animation: ${load} 2s infinite;
`;
