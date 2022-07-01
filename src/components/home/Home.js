import React from "react";
import Navbar from "../navbar/Navbar";
import { homeLinks } from "../../data";

const Home = () => {
  return (
    <div>
      <Navbar links={homeLinks} />
      <h1>Mythical Books</h1>
    </div>
  );
};

export default Home;
