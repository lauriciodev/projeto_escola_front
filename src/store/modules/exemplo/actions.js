import * as types from "../types";

export function clickSuccess() {
  return {
    type: types.BOTAO__SUCCESS,
    payload: { nome: "lauricio" },
  };
}
export function clickFailure() {
  return {
    type: types.BOTAO__FAILURE,
    payload: { nome: "lauricio" },
  };
}
export function clickRequest() {
  return {
    type: types.BOTAO__REQUEST,
    payload: { nome: "lauricio" },
  };
}
