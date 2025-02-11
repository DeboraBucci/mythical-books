import { useContext } from "react";
import LanguageContext from "../../../context/language-context";
import SectionHeader from "../../UI/SectionHeader";
import BenefitsList from "./BenefitsList";
import { titles } from "data/general-data";

const Benefits = () => {
  const { language } = useContext(LanguageContext);
  const { title, subtitle } = titles[language].benefits;

  return (
    <section className="benefits" id="benefits">
      <SectionHeader
        styles="benefits__heading"
        title={title}
        subtitle={subtitle}
      />

      <BenefitsList language={language} />
    </section>
  );
};

export default Benefits;
