import "./App.css";
import { createContext, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Login } from "./components/Login";
import { Uncontrol } from "./components/Uncontrol";
import Profile from "./components/Profile";
import PureComp from "./components/PureCompn/PureComp";

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
        <h3>Higher order components</h3>
        <Profile />
        <br />
        <PureComp />
        <Footer />
      </div>
    </ContextTheme.Provider>
  );
};

export default App;
