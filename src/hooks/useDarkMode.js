import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue = false) => {
  const [darkMode, setMode] = useLocalStorage(key, initialValue);



  return [darkMode, setMode];
};
