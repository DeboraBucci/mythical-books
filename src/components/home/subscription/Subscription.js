import React, { useState } from "react";
import { subscriptionCards } from "../../../data";
import SubscriptionCard from "./SubscriptionCard";

const Subscription = () => {
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
    const subscriptionCards = document.querySelectorAll(".subscription-card");
    subscriptionCards.forEach((card) => {
      // LEFT INVISIBLE TO FAR LEFT
      if (card.classList.contains("card--invisible-left")) {
        card.style.transform = "scale(.6) translateX(-200%)";
        card.style.zIndex = "2";
      }

      // FAR LEFT TO LEFT
      if (card.classList.contains("card--far-left")) {
        card.style.transform = "scale(.8) translateX(-87.5%)";
        card.style.zIndex = "3";
      }

      // LEFT TO ACTIVE
      if (card.classList.contains("card--left")) {
        card.style.transform = "scale(1) translateX(0%)";
        card.style.zIndex = "10";
      }

      // ACTIVE TO RIGHT
      if (card.classList.contains("card--active")) {
        card.style.transform = "scale(.8) translateX(87.5%)";
        card.style.zIndex = "3";
      }

      // RIGHT TO FAR RIGHT
      if (card.classList.contains("card--right")) {
        card.style.transform = "scale(.6) translateX(200%)";
        card.style.zIndex = "2";
      }

      // FAR RIGHT TO INVISIBLE RIGHT
      if (card.classList.contains("card--far-right")) {
        card.style.transform = "scale(.4) translateX(0%)";
        card.style.zIndex = "1";
      }
    });
    subscriptionCards.forEach((card) => {
      card.style.transform = "";
      card.style.transition = "";
      card.style.zIndex = "";
    });
    const newArr = cardPositions.slice();
    const shifted = newArr.shift();
    newArr.push(shifted);
    setCardPositions(newArr);
  };

  const rightArrowHandler = () => {
    const subscriptionCards = document.querySelectorAll(".subscription-card");
    subscriptionCards.forEach((card) => {
      // INVISIBLE RIGHT TO FAR RIGHT
      if (card.classList.contains("card--invisible-right")) {
        card.style.transform = "scale(.6) translateX(200%)";
        card.style.zIndex = "2";
      }

      // FAR RIGHT TO RIGHT
      if (card.classList.contains("card--far-right")) {
        card.style.transform = "scale(.8) translateX(87.5%)";
        card.style.zIndex = "3";
      }

      // RIGTH TO ACTIVE
      if (card.classList.contains("card--right")) {
        card.style.transform = "scale(1) translateX(0%)";
        card.style.zIndex = "10";
      }

      // ACTIVE TO LEFT
      if (card.classList.contains("card--active")) {
        card.style.transform = "scale(.8) translateX(-87.5%)";
        card.style.zIndex = "3";
      }

      // LEFT TO FAR-LEFT
      if (card.classList.contains("card--left")) {
        card.style.transform = "scale(.6) translateX(-200%)";
        card.style.zIndex = "2";
      }

      // FAR-LEFT TO INVISIBLE-LEFT
      if (card.classList.contains("card--far-left")) {
        card.style.transform = "scale(.4) translateX(0%)";
        card.style.zIndex = "1";
      }
    });

    subscriptionCards.forEach((card) => {
      card.style.transform = "";
      card.style.zIndex = "";
    });
    const newArr = cardPositions.slice();
    const popped = newArr.pop();
    newArr.unshift(popped);
    setCardPositions(newArr);
  };

  return (
    <section id="subscription" className="subscription">
      <div className="subscription__heading">
        <h2>Our Subscriptions</h2>
        <p>Take a peek into our subscriptions</p>
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
    </section>
  );
};

export default Subscription;
