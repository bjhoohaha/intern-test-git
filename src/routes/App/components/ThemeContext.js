import React from "react";

// use of context to pass props to children
const ThemeContext = React.createContext({
  isDarkMode: false,
  toggleMode: () => {}
});

export default ThemeContext;
