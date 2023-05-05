import { all } from "redux-saga/effects";

import exemple from "./exemplo/sagas";

export default function* rootSaga() {
  return yield all([exemple]);
}
