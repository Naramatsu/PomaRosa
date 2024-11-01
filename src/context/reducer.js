import { SET_LANGUAJE } from "./actions";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LANGUAJE:
      return {
        ...state,
        languaje: payload,
      };

    default:
      return state;
  }
};

export default reducer;
