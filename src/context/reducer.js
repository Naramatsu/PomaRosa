import { CLEAR_IMAGE, SELECT_IMAGE, SET_LANGUAJE } from "./actions";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LANGUAJE:
      return {
        ...state,
        languaje: payload,
      };
    case SELECT_IMAGE:
      return {
        ...state,
        image: payload,
      };
    case CLEAR_IMAGE:
      return {
        ...state,
        image: null,
      };

    default:
      return state;
  }
};

export default reducer;
