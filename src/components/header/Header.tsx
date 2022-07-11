import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { errorAction } from "../../store/errorSlice";

const Header = () => {
  const [active, setActive] = useState(2);
  const dispatch = useDispatch();

  const fecthData = (activeTab: number, fecthTime: string) => {
    setActive(activeTab);
    dispatch(errorAction.getErrorList(fecthTime));
  };

  return (
    <div className="header">
      <h2 className="header__title">Main metrics </h2>
      <div className="header__tab">
        <span
          className={`header__item ${active == 0 && "header__active"}`}
          onClick={() => fecthData(0, "errors_last_hour")}
        >
          Last hour
        </span>
        <span
          className={`header__item ${active == 1 && "header__active"}`}
          onClick={() => fecthData(1, "errors_last_hour")}
        >
          Today
        </span>
        <span
          className={`header__item ${active == 2 && "header__active"}`}
          onClick={() => fecthData(2, "errors_yesterday")}
        >
          Yesterday
        </span>
        <span
          className={`header__item ${active == 3 && "header__active"}`}
          onClick={() => fecthData(3, "errors_last_3days")}
        >
          Last 3 days
        </span>
      </div>
    </div>
  );
};

export default Header;
