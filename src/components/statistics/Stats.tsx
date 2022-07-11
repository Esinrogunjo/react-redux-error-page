import React from "react";
import Funnel from "../atoms/Funnel";
import "./Stats.scss";

import Search from "./Each/Search";
import Clicks from "./Each/Clicks";
import Cart from "./Each/Cart";
const Stats = () => {
  return (
    <div className="stat-wrapper">
      <Search />
      <div className="divider"></div>
      <Clicks />
      <div className="divider"></div>
      <Cart />
    </div>
  );
};

export default Stats;
