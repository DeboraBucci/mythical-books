import React, { useContext } from "react";
import LanguageContext from "../../../context/language-context";

import { howItWorksContent, titles } from "../../../data";
import Step from "./Step";

const HowItWorks = () => {
  const languageCtx = useContext(LanguageContext);

  return (
    <section className="works" id="works">
      <div className="works__heading section-heading">
        <h2>{(titles as any)[languageCtx.language].howItWorks.main}</h2>
        <p>{(titles as any)[languageCtx.language].howItWorks.subtitle}</p>
      </div>

      <ul className="works__steps">
        {(howItWorksContent as any)[languageCtx.language].map(
          (step: any, i: number) => (
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
          )
        )}
      </ul>
    </section>
  );
};

export default HowItWorks;
