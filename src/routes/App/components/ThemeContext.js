import React from "react";

const ThemeContext = React.createContext({
  isDarkMode: false,
  toggleMode: () => {}
});

export default ThemeContext;
