import React from "react";
import { storeLinks } from "../../data";
import Navbar from "../navbar/Navbar";

const Store = () => {
  return (
    <div className="store">
      <Navbar links={storeLinks} title={true} />
    </div>
  );
};

export default Store;
