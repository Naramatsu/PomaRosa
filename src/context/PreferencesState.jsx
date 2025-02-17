import { useReducer } from "react";
import Reducer from "./reducer";
import { PreferencesContext } from ".";
import { KITCHEN, SPANISH } from "../utils/constants";
import { CLEAR_IMAGE, SELECT_IMAGE, SET_LANGUAJE, SET_THEME } from "./actions";

const PreferencesState = ({ children }) => {
  const initialState = {
    languaje: localStorage.getItem("languaje") || SPANISH,
    image: null,
    theme: KITCHEN,
  };
  const [globalState, dispatch] = useReducer(Reducer, initialState);

  const setLanguaje = (languaje) => {
    dispatch({
      type: SET_LANGUAJE,
      payload: languaje,
    });
    localStorage.setItem("languaje", languaje);
  };

  const selectImage = (image) => {
    dispatch({
      type: SELECT_IMAGE,
      payload: image,
    });
  };

  const clearImage = () => {
    dispatch({
      type: CLEAR_IMAGE,
    });
  };

  const setTheme = (theme) => {
    dispatch({
      type: SET_THEME,
      payload: theme,
    });
  };

  const combinedFunctions = { setLanguaje, selectImage, clearImage, setTheme };

  return (
    <PreferencesContext.Provider
      value={{ ...globalState, ...combinedFunctions }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesState;
