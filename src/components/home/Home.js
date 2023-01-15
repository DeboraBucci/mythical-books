import React, { useEffect, useState } from "react";

import Navbar from "../navbar/Navbar";
import Hero from "./hero/Hero";
import HowItWorks from "./how-it-works/HowItWorks";
import Gallery from "./gallery/Gallery";
import Subscription from "./subscription/Subscription";
import Footer from "../footer/Footer";

import { homeLinks } from "../../data";

const Home = () => {
  const [isTitleShowing, setIsTitleShowing] = useState(false);
  const [logoSize, setLogoSize] = useState("big");

  useEffect(() => {
    const handler = (e) => {
      if (e.target.documentElement.scrollTop > 0) {
        setIsTitleShowing(true);
        setLogoSize("small");
      } else {
        setIsTitleShowing(false);
        setLogoSize("big");
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="home">
      <Navbar links={homeLinks} title={isTitleShowing} logoSize={logoSize} />
      <Hero />
      <HowItWorks />
      <Gallery />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;
