/* eslint-disable import/prefer-default-export */

import styled from "styled-components";

export const Title = styled.h1`
  background-color: ${(props) => (props.isRed ? "blue" : "red")};
`;
