import React from "react";

import Navbar from "../navbar/Navbar";
import Hero from "./hero/Hero";

import { homeLinks } from "../../data";
import HowItWorks from "./how-it-works/HowItWorks";
import Subscription from "./subscription/Subscription";

const Home = () => {
  return (
    <div className="home">
      <Navbar links={homeLinks} />
      <Hero />
      <HowItWorks />
      <Subscription />
    </div>
  );
};

export default Home;
