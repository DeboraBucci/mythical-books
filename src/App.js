import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Store from "./components/store/Store";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Error404 from "./components/errors/Error404";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
