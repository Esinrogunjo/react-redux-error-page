import React from "react";
import Funnel from "../../atoms/Funnel";

import Arrow from "../../atoms/Arrow";
const Search = () => {
  return (
    <div className="stat-wrapper__single-stat-wrapper">
      <div className="stat-wrapper__left-container">
        <div className="stat-wrapper__image-wrapper">
          <Funnel className="stat-wrapper__vector" />
          <Arrow className="stat-wrapper__image" />
        </div>
        <div className="stat-wrapper__searches">
          <div className="stat-wrapper__searches-items">
            <div className="stat-wrapper__search-item">Searches</div>
            <div className="stat-wrapper__search-item stat-wrapper__searches-light">
              29 380
            </div>
            <div className="stat-wrapper__search-item stat-wrapper__searches-lighter">
              27 985
            </div>
          </div>

          <div className="stat-wrapper__searches-items-right">
            <div className="stat-wrapper__btn">+5%</div>
            <div className="stat-wrapper__yesterday">Yesterday</div>
            <div className="stat-wrapper___last-friday">Last friday</div>
          </div>
        </div>
      </div>

      <div className="stat-wrapper__right_container">
        <span className="stat-wrapper__right-container-title">
          Mobile traffic: 100%{" "}
        </span>
        <span className="stat-wrapper__right-container-title">
          Web traffic: 100%
        </span>
        <span className="stat-wrapper__right-container-comment">
          You get 100% traffic on mobile and desktop devices.
        </span>
        <div className="stat-wrapper__right-container-help-text">
          <span className="stat-wrapper__yesterday">Help:</span>
          <span className="stat-wrapper__right-container-blue-text">
            {" "}
            Searches, Pessimisation
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
