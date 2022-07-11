import React from "react";
import Funnel from "../atoms/Funnel";
import "./Stats.scss";

import Search from "./Each/Search";
import Clicks from "./Each/Clicks";
import Cart from "./Each/Cart";
import { useSelector } from "react-redux";
const Stats = () => {
  const data = useSelector((state: any) => state.errorReducer.data);
  const daySelected = useSelector(
    (state: any) => state.errorReducer.selectedDay
  );
  return (
    <div className="stat-wrapper">
      <Search data={data} daySelected={daySelected} />
      <div className="divider"></div>
      <Clicks data={data} daySelected={daySelected} />
      <div className="divider"></div>
      <Cart data={data} daySelected={daySelected} />
    </div>
  );
};

export default Stats;
