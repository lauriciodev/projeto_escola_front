import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as action from "./actions";
import * as types from "../types";

const requisicao = () =>
  // eslint-disable-next-line
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });

function* exempleRequest() {
  try {
    yield call(requisicao);
    toast.success("logado com sucesso");
    yield put(action.clickSuccess());
  } catch {
    toast.error("erro ao logar");
    yield put(action.clickSuccess());
  }
}

export default all([takeLatest(types.BOTAO__REQUEST, exempleRequest)]);
