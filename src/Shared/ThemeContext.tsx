import { createContext, useState } from "react";

const ThemeContext = createContext(null);
const [theme, setTheme] = useState("light");
const ToggleTheme = () => {
  setTheme((current) => (current === "light" ? "dark" : "light"));
};

export default { ThemeContext, ToggleTheme, theme };
