// estado inicial
const initialState = {
  logado: false,
};

// onde será escutada a ação disparada
// eslint-disable-next-line
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "BOTAO__CLICADO": {
      const newState = { ...state };
      newState.logado = !newState.logado;
      return newState;
    }

    default: {
      return state;
    }
  }
}
