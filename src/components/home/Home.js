import React from "react";

import Navbar from "../navbar/Navbar";
import Hero from "./hero/Hero";

import { homeLinks } from "../../data";

const Home = () => {
  return (
    <div>
      <Navbar links={homeLinks} />
      <Hero />
    </div>
  );
};

export default Home;
