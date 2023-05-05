import * as types from "../types";
// estado inicial
const initialState = {
  logado: false,
};

// onde será escutada a ação disparada
// eslint-disable-next-line
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO__SUCCESS: {
      const newState = { ...state };
      newState.logado = !newState.logado;
      // eslint-disable-next-line
      console.log("sucesso na requisição");
      return newState;
    }
    case types.BOTAO__FAILURE: {
      // eslint-disable-next-line
      console.log("erro na requisição :) ");
      return state;
    }
    case types.BOTAO__REQUEST: {
      // eslint-disable-next-line
      console.log("fazendo requisição");
      return state;
    }

    default: {
      return state;
    }
  }
}
