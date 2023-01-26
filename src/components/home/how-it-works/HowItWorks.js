import React from "react";
import { Link } from "react-router-dom";

import stepOne from "../../../assets/step-one.webp";
import stepTwo from "../../../assets/step-one.webp";
import Step from "./Step";

const HowItWorks = () => {
  return (
    <section className="works" id="works">
      <div className="works__heading section-heading">
        <h2>How it Works</h2>
        <p>As easy as killing a basilik... </p>
      </div>

      <div className="works__steps">
        <Step title="Join in" number="1" img={stepOne}>
          <p>
            To start off you need to be logged in into your account,{" "}
            <Link to="/register">
              (create it here if you don't have one already)
            </Link>
            , to make a subscription.
          </p>
        </Step>

        <Step title="Choose subscription" number="2" img={stepTwo}>
          <p>
            We offer many <a href="#subscriptions">subscription plans</a>, each
            one of them has different price and <a href="#benefits">benefits</a>
            .
          </p>

          <p>
            Once you decided on one, click on the 'upgrade' button at the bottom
            of the card to start the subscription process.
          </p>
        </Step>

        <Step title="Fill the form" number="3" img={stepTwo}>
          <p>
            Once you click on the 'upgrade' button, you'll be redirected to a
            form which needs to be filled with some of your personal data to
            carry through the payment.
          </p>

          <p>
            And don't worry, we have secure connections that prevent any
            malicious user from stealing your data.
          </p>
        </Step>

        <Step title="Enjoy" number="4" img={stepTwo}>
          <p>
            At the moment of paying the subscription, your account will be
            activated in a matter of minutes, and from there on you will be able
            to enjoy all the benefits of your subscription plan.
          </p>

          <p>Enjoy the reading!</p>
        </Step>
      </div>
    </section>
  );
};

export default HowItWorks;
