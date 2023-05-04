import { createStore } from "redux";

// estado inicial
const initialState = {
  logado: false,
};

// onde será escutada a ação disparada
const reducer = (action, state = initialState) => {
  switch (action.type) {
    case "BOTAO2": {
      const newState = { ...state };
      newState.logado = !newState.logado;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
