import styled from "styled-components";
import * as color from "../../config/colors";

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

  p {
    color: white;
    font-size: 1.3rem;
  }
`;
