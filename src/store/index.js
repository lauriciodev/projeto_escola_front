import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import persistedReducers from "./modules/reduxPersist";
import rootReducers from "./modules/rootReducers";
import rootSaga from "./modules/rootSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducers(rootReducers),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
