import { Benefit, benefitsListContent } from "data/benefits-section-data";
import BenefitsItem from "./BenefitsItem";
import { Languages } from "types/general";

interface BenefitsListProps {
  language: Languages;
}

const BenefitsList: React.FC<BenefitsListProps> = ({ language }) => {
  return (
    <ul className="benefits__list">
      {benefitsListContent.map((item: Benefit) => (
        <BenefitsItem
          icon={item.icon}
          title={item.content[language].title}
          text={item.content[language].text}
        />
      ))}
    </ul>
  );
};

export default BenefitsList;
