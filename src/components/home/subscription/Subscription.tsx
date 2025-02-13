import { useContext, useState } from "react";
import LanguageContext from "../../../context/language-context";
import SubscriptionCard from "./SubscriptionCard";
import SubscriptionDecoration from "./SubscriptionDecoration";
import { titles } from "data/general-data";
import { GetSubscriptionCardsInformation } from "data/subscription-section-data";
import SectionHeader from "../../../components/UI/SectionHeader";

const Subscription = () => {
  const languageCtx = useContext(LanguageContext);
  const { title, subtitle } = titles[languageCtx.language].subscriptions;

  const [cardPositions, setCardPositions] = useState([
    "invisible-left",
    "far-left",
    "left",
    "active",
    "right",
    "far-right",
    "invisible-right",
  ]);

  const leftArrowHandler = () => {
    const newArr = cardPositions.slice();
    const shifted = newArr.shift();

    if (shifted) {
      newArr.push(shifted);
      setCardPositions(newArr);
    }
  };

  const rightArrowHandler = () => {
    const newArr = cardPositions.slice();
    const popped = newArr.pop();

    if (popped) {
      newArr.unshift(popped);
      setCardPositions(newArr);
    }
  };

  const subscriptionCards = GetSubscriptionCardsInformation(
    languageCtx.language
  );

  return (
    <section id="subscriptions" className="subscription">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        styles="subscription__heading"
      />

      <div
        className="subscription__cards"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <i
          onClick={leftArrowHandler}
          className="fas fa-chevron-left subscription__arrow subscription__arrow--left"
        ></i>

        {subscriptionCards.map(
          ({ icon, name, comment, className, price, benefits }, i) => (
            <SubscriptionCard
              icon={icon}
              name={name}
              key={name}
              comment={comment}
              className={`subscription-card--${cardPositions[i]} subscription-card--${className}`}
              monthlyPrice={price[0]}
              yearlyPrice={price[1]}
              {...benefits}
            />
          )
        )}

        <i
          onClick={rightArrowHandler}
          className="fas fa-chevron-right subscription__arrow subscription__arrow--right"
        ></i>
      </div>

      <SubscriptionDecoration />
    </section>
  );
};

export default Subscription;
