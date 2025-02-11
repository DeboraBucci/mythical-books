import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { IOptions, RecursivePartial } from "tsparticles-engine";

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

const ParticlesBackground = () => {
  const particlesInit = async (main: any) => await loadFull(main);

  return (
    <Particles
      style={{ zIndex: "1" }}
      init={particlesInit}
      options={opt as RecursivePartial<IOptions>}
    />
  );
};

export default ParticlesBackground;
