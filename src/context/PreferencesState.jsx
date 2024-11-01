import { useReducer } from "react";
import Reducer from "./reducer";
import { PreferencesContext } from ".";
import { SPANISH } from "../utils/constants";
import { SET_LANGUAJE } from "./actions";

const PreferencesState = ({ children }) => {
  const initialState = {
    languaje: localStorage.getItem("languaje") || SPANISH,
  };
  const [globalState, dispatch] = useReducer(Reducer, initialState);

  const setLanguaje = (languaje) => {
    dispatch({
      type: SET_LANGUAJE,
      payload: languaje,
    });
    localStorage.setItem("languaje", languaje);
  };

  const combinedFunctions = { setLanguaje };

  return (
    <PreferencesContext.Provider
      value={{ ...globalState, ...combinedFunctions }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesState;
