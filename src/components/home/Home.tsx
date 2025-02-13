import { useEffect, useState } from "react";

import Header from "../header/Header";
import Hero from "./hero/Hero";
import HowItWorks from "./how-it-works/HowItWorks";
import Benefits from "./benefits/Benefits";
import Gallery from "./gallery/Gallery";
import Subscription from "./subscription/Subscription";
import Footer from "../footer/Footer";
import { homeLinks } from "data/links-data";

const Home = () => {
  const [isTitleShowing, setIsTitleShowing] = useState(false);
  const [logoSize, setLogoSize] = useState("big");

  useEffect(() => {
    const handler = (e: Event) => {
      if ((e.target as Document).documentElement.scrollTop > 0) {
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
      <Header links={homeLinks} title={isTitleShowing} logoSize={logoSize} />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;
