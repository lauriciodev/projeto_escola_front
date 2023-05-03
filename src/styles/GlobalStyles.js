import { createGlobalStyle } from "styled-components";
import * as color from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  background-color: ${color.primaryColor};
}

  /* body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background-color: ${color.successColor};
  } */


button{
  cursor: pointer;
  background-color: ${color.buttonColor};
  color: #fff;
  border-radius: 4px;
  border: 1px solid ${color.borderColor};
  font-weight: 700;
  padding: 10px;
}

a{
  text-decoration: none;
}

`;
