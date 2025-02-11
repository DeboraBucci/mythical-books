import React, { useContext } from "react";
import LanguageContext from "../../../context/language-context.js";
import { benefitsContent, titles } from "../../../data.js";
import BenefitsItem from "./BenefitsItem.tsx";
import SectionHeader from "../../UI/SectionHeader.tsx";

const Benefits = () => {
  const languageCtx = useContext(LanguageContext);

  return (
    <section className="benefits" id="benefits">
      <SectionHeader
        styles="benefits__heading"
        title={titles[languageCtx.language].benefits.main}
        subtitle={titles[languageCtx.language].benefits.subtitle}
      />

      <ul className="benefits__list">
        {benefitsContent[languageCtx.language].map((item) => (
          <BenefitsItem {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
