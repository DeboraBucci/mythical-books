import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Error404 from "./components/errors/Error404";

import ThemeContext from "./context/theme-context";

import AOS from "aos";
import "aos/dist/aos.css";
import StoreRoutes from "./components/store/StoreRoutes";

function App() {
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light-theme");
    }

    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "english");
    }
  }, []);

  return (
    <div className={themeCtx.theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/*" element={<StoreRoutes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
