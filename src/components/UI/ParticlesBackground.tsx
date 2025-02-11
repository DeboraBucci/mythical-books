import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { opt } from "../../data";
import { IOptions, RecursivePartial } from "tsparticles-engine";

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
