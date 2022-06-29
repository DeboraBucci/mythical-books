import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Error404 = () => {
  const opt = {
    background: {
      color: {
        value: "#0a0016",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#fff",
      },
      links: {
        color: "#dfd3ff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="error404">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={opt}
        className="error404__particles"
      />
      <i className="fa-solid fa-bomb error404__icon"></i>
      <h2 className="error404__title">404</h2>
      <p className="error404__subtitle">Page not found.</p>

      <Link to="/" className="error404__btn">
        Go back home
      </Link>
    </div>
  );
};

export default Error404;
