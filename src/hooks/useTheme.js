import { useContext } from "react";
import { PreferencesContext } from "../context";

const useTheme = () => {
  const { theme, setTheme } = useContext(PreferencesContext);

  return [theme, setTheme];
};

export default useTheme;
