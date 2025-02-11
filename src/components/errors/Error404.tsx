import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../UI/ParticlesBackground";

const Error404 = () => {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <div className="error404">
      <ParticlesBackground />

      <i className="fa-solid fa-bomb error404__icon"></i>
      <h2 className="error404__title">404</h2>
      <p className="error404__subtitle">Page not found.</p>

      <button onClick={() => navigate(-1)} className="error404__btn">
        Go back <i className="fa-solid fa-reply"></i>
      </button>
    </div>
  );
};

export default Error404;
