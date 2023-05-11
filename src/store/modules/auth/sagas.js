import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { get } from "lodash";
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

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.token", "");
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, `http://34.95.229.193/usuarios/`, {
        email,
        nome,
        password: password || undefined,
      });

      toast.success("Conta atualizada com sucesso");
      yield put(action.registerUpdateSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, `http://34.95.229.193/usuarios/`, {
        email,
        nome,
        password,
      });

      toast.success("Conta criada com sucesso");
      yield put(action.registerCreateSuccess({ nome, email, password }));
    }
  } catch (e) {
    const errors = get(e, "response.data.error", []);
    // const status = get(e, "response.status", 0);
    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error("erro desconhecido");
    }

    yield put(action.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN__REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
