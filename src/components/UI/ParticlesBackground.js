import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { opt } from "../../data";

const ParticlesBackground = () => {
  const particlesInit = async (main) => await loadFull(main);

  return (
    <Particles style={{ zIndex: "1" }} init={particlesInit} options={opt} />
  );
};

export default ParticlesBackground;
