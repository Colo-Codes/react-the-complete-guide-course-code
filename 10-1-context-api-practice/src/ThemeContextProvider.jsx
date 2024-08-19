// Todo: Create & manage context in this file
import React from "react";

const THEMES = ["light", "dark"];

export const ThemeContext = React.createContext({
  theme: THEMES[0],
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  // Todo: Add the component code (incl. dynamic context value)
  const [theme, setTheme] = React.useState(THEMES[0]);

  function handleToggleTheme() {
    setTheme((prevTheme) => {
      let newTheme = prevTheme;

      if (prevTheme === THEMES[0]) {
        newTheme = THEMES[1];
      } else {
        newTheme = THEMES[0];
      }

      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
