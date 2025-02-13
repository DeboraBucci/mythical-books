import { useContext } from "react";
import LanguageContext from "../../../context/language-context";

import Step from "./Step";
import { titles } from "data/general-data";
import { howItWorksContent } from "data/how-it-works-data";

const HowItWorks = () => {
  const { language } = useContext(LanguageContext);
  const { title, subtitle } = titles[language].howItWorks;

  return (
    <section className="works" id="works">
      <div className="works__heading section-heading">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <ul className="works__steps">
        {howItWorksContent[language].map((step: any, i: number) => (
          <Step
            key={step.title}
            title={step.title}
            number={i + 1}
            img={step.img}
          >
            {step.text.map((content: any, i: number) => (
              <p key={`${step.title}__paragraph--${i}`}>{content}</p>
            ))}
          </Step>
        ))}
      </ul>
    </section>
  );
};

export default HowItWorks;
