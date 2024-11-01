import { useContext } from "react";
import { PreferencesContext } from "../context";

const useLanguaje = () => {
  const { languaje, setLanguaje } = useContext(PreferencesContext);

  return [languaje, setLanguaje];
};

export default useLanguaje;
