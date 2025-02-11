import { useContext } from "react";
import LanguageContext from "../../../context/language-context";
import { titles } from "../../../data";
import SectionHeader from "../../UI/SectionHeader";
import BenefitsList from "./BenefitsList";

const Benefits = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="benefits" id="benefits">
      <SectionHeader
        styles="benefits__heading"
        title={(titles as any)[language].benefits.main}
        subtitle={(titles as any)[language].benefits.subtitle}
      />

      <BenefitsList language={language} />
    </section>
  );
};

export default Benefits;
