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

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}

export function registerUpdateSuccess(payload) {
  return {
    type: types.REGISTER_UPDATE_SUCCESS,
    payload,
  };
}

export function registerCreateSuccess(payload) {
  return {
    type: types.REGISTER_CREATE_SUCCESS,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}
