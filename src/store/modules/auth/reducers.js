import * as types from "../types";
// estado inicial
const initialState = {
  logado: false,
  token: false,
  user: {},
  isLoading: false,
};

// onde será escutada a ação disparada
// eslint-disable-next-line
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN__SUCCESS: {
      const newState = { ...state };
      newState.logado = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;

      return newState;
    }
    case types.LOGIN__FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
}
