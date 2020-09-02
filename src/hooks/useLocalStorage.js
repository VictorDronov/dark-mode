import { useState } from "react";

export const useLocalStorage = (key, initialState) => {
  const [darkMode, setDarkMode] = useState(false, () => {
    if (JSON.parse(window.localStorage.getItem(key))) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialState));
      return initialState;
    }
  });

  const setMode = (mode) => {
    setDarkMode(mode);
    window.localStorage.setItem(key, JSON.stringify(mode));
  };

  return [darkMode, setMode];
};
