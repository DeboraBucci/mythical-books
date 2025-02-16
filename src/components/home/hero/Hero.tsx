import { useContext } from "react";
import LanguageContext from "../../../context/language-context";
import { hero } from "data/hero-data";

const Hero = () => {
  const languageCtx = useContext(LanguageContext);

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__title">Mythical Books</h1>
        <p className="hero__slogan">
          {hero[languageCtx.language].firstPart}
          <span className="hero__slogan--underline">
            {hero[languageCtx.language].secondPart}
          </span>{" "}
          <span className="hero__slogan--icon">
            <i className="fa-solid fa-broom" />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
