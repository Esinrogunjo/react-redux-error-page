import React from "react";
import Arrow from "../../atoms/Arrow";

import Thumb from "../../atoms/Thumb";

const Clicks = ({ data, daySelected }: any) => {
  return (
    <div className="stat-wrapper__single-stat-wrapper">
      <div className="stat-wrapper__left-container">
        <div className="stat-wrapper__image-wrapper">
          <Thumb className="stat-wrapper__vector" />
          <Arrow className="stat-wrapper__image" />
        </div>
        <div className="stat-wrapper__searches">
          <div className="stat-wrapper__searches-items">
            <div className="stat-wrapper__search-item text-red">Clicks</div>
            <div className="stat-wrapper__search-item stat-wrapper__searches-light">
              {data.clicks1}
            </div>
            <div className="stat-wrapper__search-item stat-wrapper__searches-lighter">
              {data.clicks2}
            </div>
          </div>

          <div className="stat-wrapper__searches-items-right">
            <div className="stat-wrapper__btn bg-red">-13%</div>
            <div className="stat-wrapper__yesterday">
              {daySelected == "errors_last_3days"
                ? "Last 3 days"
                : daySelected == "errors_last_hour"
                ? "Last hour"
                : daySelected == "errors_today"
                ? "Today"
                : "Yesterday"}
            </div>
            <div className="stat-wrapper___last-friday">Last friday</div>
          </div>
        </div>
      </div>

      <div className="stat-wrapper__right_container">
        <span className="stat-wrapper__right-container-title text-red">
          CTR:
          {data.ctr1 && data.ctr2
            ? ((data.ctr1 + data.ctr2) / 2).toFixed(3)
            : " 0,12"}{" "}
          %
        </span>

        <span className="stat-wrapper__right-container-comment">
          You get 100% traffic on mobile and desktop devices.
        </span>
        <div className="stat-wrapper__right-container-help-text">
          <span className="stat-wrapper__yesterday">Help:</span>
          <span className="stat-wrapper__right-container-blue-text">
            {" "}
            CTR, Cliks
          </span>
        </div>
      </div>
    </div>
  );
};

export default Clicks;
