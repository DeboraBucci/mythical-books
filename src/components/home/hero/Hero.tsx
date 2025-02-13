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
          {(hero as any)[languageCtx.language].firstPart}
          <span>{(hero as any)[languageCtx.language].secondPart}</span>{" "}
          <div className="hero__slogan--icon">
            <i className="fa-solid fa-broom" />
          </div>
        </p>
      </div>
    </section>
  );
};

export default Hero;
