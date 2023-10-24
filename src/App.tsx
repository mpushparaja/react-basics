import "./App.css";
import { createContext, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Login } from "./components/Login";
import { Uncontrol } from "./components/Uncontrol";

const ContextTheme = createContext<any>(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ContextTheme.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header />
        <Login />
        <Uncontrol />
        <Footer />
      </div>
    </ContextTheme.Provider>
  );
};

export default App;
