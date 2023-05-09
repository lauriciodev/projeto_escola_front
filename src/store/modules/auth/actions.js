import * as types from "../types";

export function loginRequest(payload) {
  return {
    type: types.LOGIN__REQUEST,
    payload,
  };
}
export function loginSuccess(payload) {
  return {
    type: types.LOGIN__SUCCESS,
    payload,
  };
}
export function loginFailure(payload) {
  return {
    type: types.LOGIN__FAILURE,
    payload,
  };
}
