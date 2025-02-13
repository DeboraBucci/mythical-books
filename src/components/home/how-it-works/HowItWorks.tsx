import { useContext } from "react";
import LanguageContext from "../../../context/language-context";

import Step from "./Step";
import { titles } from "data/general-data";
import { howItWorksContent } from "data/how-it-works-data";
import SectionHeader from "../../../components/UI/SectionHeader";
import Steps from "./Steps";

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

      <Steps steps={howItWorksContent[language]} />
    </section>
  );
};

export default HowItWorks;
