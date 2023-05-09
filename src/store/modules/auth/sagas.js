import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import axios from "axios";
import * as action from "./actions";
import * as types from "../types";

function* loginRequest({ payload }) {
  try {
    const response = yield call(
      axios.post,
      "http://34.95.229.193/token",
      payload
    );
    yield put(action.loginSuccess({ ...response.data }));
    toast.success("você está logado");
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  } catch (erro) {
    toast.error("Email ou senha inválidos");
    yield put(action.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN__REQUEST, loginRequest)]);
