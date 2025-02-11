import { useContext } from "react";
import LanguageContext from "../../../context/language-context";
import { benefitsContent, titles } from "../../../data";
import BenefitsItem from "./BenefitsItem";
import SectionHeader from "../../UI/SectionHeader";

const Benefits = () => {
  const languageCtx = useContext(LanguageContext);

  return (
    <section className="benefits" id="benefits">
      <SectionHeader
        styles="benefits__heading"
        title={(titles as any)[languageCtx.language].benefits.main}
        subtitle={(titles as any)[languageCtx.language].benefits.subtitle}
      />

      <ul className="benefits__list">
        {(benefitsContent as any)[languageCtx.language].map((item: any) => (
          <BenefitsItem {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
