import React from "react";
import Arrow from "../../atoms/Arrow";

import Thumb from "../../atoms/Thumb";

const Clicks = () => {
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
              29 380
            </div>
            <div className="stat-wrapper__search-item stat-wrapper__searches-lighter">
              27 985
            </div>
          </div>

          <div className="stat-wrapper__searches-items-right">
            <div className="stat-wrapper__btn bg-red">-13%</div>
            <div className="stat-wrapper__yesterday">Yesterday</div>
            <div className="stat-wrapper___last-friday">Last friday</div>
          </div>
        </div>
      </div>

      <div className="stat-wrapper__right_container">
        <span className="stat-wrapper__right-container-title text-red">
          CTR: 0,04%{" "}
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
