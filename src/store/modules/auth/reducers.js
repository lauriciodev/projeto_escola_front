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
      console.log("Reducer", action.payload);
      return state;
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
