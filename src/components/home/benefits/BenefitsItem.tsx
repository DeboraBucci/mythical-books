import React from "react";

interface BenefitsItemProps {
  title: string;
  icon: string;
  text: string[];
}

const BenefitsItem: React.FC<BenefitsItemProps> = ({ title, icon, text }) => {
  return (
    <li className="benefits-item" key={title}>
      <div className="benefits-item__heading">
        <i className={icon} />
        <h3>{title}</h3>
      </div>

      {text.map((item, i) => (
        <p key={`benefit-number--${i + 1}`}>{item}</p>
      ))}
    </li>
  );
};

export default BenefitsItem;
