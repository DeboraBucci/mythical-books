import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Store from "./components/store/Store";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Error404 from "./components/errors/Error404";

import ThemeContext from "./store/theme-context";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`${theme.darkTheme === false ? "white" : "dark"}-theme`}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
