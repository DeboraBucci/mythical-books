import React from "react";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <div className="benefits__heading section-heading">
        <h2>Benefits</h2>
        <p>What you are to get for the subscriptions</p>
      </div>
      <ul className="benefits__list">
        <li className="benefits__item">
          <div className="benefits__item-heading">
            <h3>Monthly Chests</h3>
            <i class="fa-solid fa-toolbox"></i>
          </div>
          <p>
            Get a hold of one of these wonderful hidden treasures and you will
            find something of sheer interest
          </p>
          <p>
            These chests contain varied items, such as bookmarks, pens, mugs,
            notebooks, and even sometimes books! (the books are chosen depending
            on your wishlist, if there are no books there, then the chest won't
            have any).
          </p>
          <p>
            <Link>Click here</Link> to see the list of all the items that may be
            inside each chest.
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__item-heading">
            <h3>Mythical Coins & Boosts</h3>
            <i class="fa-solid fa-coins"></i>
          </div>

          <p>
            These hard earned coins are valuable to be worth around 0.001
            dollars each.
          </p>

          <p>
            When buying something from our store, or by susbcribing, you will
            get some of them as a reward.
          </p>

          <code className="benefits__note">
            Note: You don't have to be subscribed to earn mythical coins, but
            you need a verified account.{" "}
            <Link to="register">Click here to create one</Link>
          </code>

          <p>
            Also win mythical coins' boost at random when receiving a chest or
            buying in our store (the chances and power of the boosters may
            increase depending on your current subscription)
          </p>

          <p>
            <Link>Click here</Link> to learn more about our currency system.
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__item-heading">
            <h3>Access to our Gallery</h3>
            <i class="fa-regular fa-images"></i>
          </div>

          <p>
            With the subscription, a whole new path is open ahead of you: The
            possibility of uploading great pictures of your adventures.
          </p>
          <p>
            <Link>Click here</Link> to inform yourself of our community
            guidelines.
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__item-heading">
            <h3>Free Delivery Worldwide</h3>
            <i class="fa-solid fa-earth-americas"></i>
          </div>

          <p>
            Self explanatory, you will get free delivery for every purchase you
            make with your subscription.
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__item-heading">
            <h3>Special Discounts</h3>
            <i class="fa-solid fa-percent"></i>
          </div>

          <p>
            Yes, it's as sweet as it sounds, special discounts for all our
            beloved subscribers.
          </p>

          <p>
            The percentage of the discounts vary depending on your current
            subscription plan. For more information about this,{" "}
            <a href="#subscriptions">check the susbcription cards below</a>
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__item-heading">
            <h3>Exclusive User Support</h3>
            <i class="fa-solid fa-headset"></i>
          </div>

          <p>
            We take good care of our subscribers by handling a 24/7, 365 days of
            the year, fast and efficient customer support.
          </p>

          <p>
            <Link>Click here</Link> for the contacting us.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
