import { createGlobalStyle } from "styled-components";
import { primaryDarkColor, buttonColor, borderColor } from "../config/colors";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  background-color: ${primaryDarkColor};
}
button{
  cursor: pointer;
  background-color: ${buttonColor};
  color: #fff;
  border-radius: 4px;
  border: 1px solid ${borderColor};
  font-weight: 700;
  padding: 10px;
}

`;
