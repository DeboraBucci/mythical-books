import { useContext } from "react";
import LanguageContext from "../../../context/language-context";

import Step from "./Step";
import { titles } from "data/general-data";
import { howItWorksContent } from "data/how-it-works-data";
import SectionHeader from "../../../components/UI/SectionHeader";

const HowItWorks = () => {
  const { language } = useContext(LanguageContext);
  const { title, subtitle } = titles[language].howItWorks;

  return (
    <section className="works" id="works">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        styles="works__heading section-heading"
      />

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
