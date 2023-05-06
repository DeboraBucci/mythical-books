import React, { useContext, useState } from "react";
import LanguageContext from "../../../context/language-context";
import { subscriptionCards, titles } from "../../../data";
import SubscriptionCard from "./SubscriptionCard";
import SubscriptionDecoration from "./SubscriptionDecoration";

const Subscription = () => {
  const languageCtx = useContext(LanguageContext);

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
    newArr.push(shifted);
    setCardPositions(newArr);
  };

  const rightArrowHandler = () => {
    const newArr = cardPositions.slice();
    const popped = newArr.pop();
    newArr.unshift(popped);
    setCardPositions(newArr);
  };

  return (
    <section id="subscriptions" className="subscription">
      <div className="subscription__heading section-heading">
        <h2>{titles[languageCtx.language].subscriptions.main}</h2>
        <p>{titles[languageCtx.language].subscriptions.subtitle}</p>
      </div>

      <div className="subscription__cards">
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
              delivery={benefits.delivery}
              discounts={benefits.discounts}
              freeBook={benefits.freeBook}
              chest={benefits.chest}
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
