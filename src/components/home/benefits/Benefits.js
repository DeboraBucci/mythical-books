import React, { useContext } from "react";
import LanguageContext from "../../../context/language-context";
import { benefitsContent, titles } from "../../../data";

const Benefits = () => {
  const languageCtx = useContext(LanguageContext);

  return (
    <section className="benefits" id="benefits">
      <div className="benefits__heading section-heading">
        <h2>{titles[languageCtx.language].benefits.main}</h2>
        <p>{titles[languageCtx.language].benefits.subtitle}</p>
      </div>
      <ul className="benefits__list">
        {benefitsContent[languageCtx.language].map(({ title, icon, text }) => (
          <li className="benefits__item">
            <div className="benefits__item-heading">
              <h3>{title}</h3>
              <i className={icon}></i>
            </div>
            {text.map((item, i) => (
              <React.Fragment key={`benefit-number--${i + 1}`}>
                {item}
              </React.Fragment>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
