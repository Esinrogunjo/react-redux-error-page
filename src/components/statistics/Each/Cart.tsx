import React from "react";
import CartIcon from "../../atoms/Cart";

const Cart = ({ data, daySelected }: any) => {
  return (
    <div className="stat-wrapper__single-stat-wrapper">
      <div className="stat-wrapper__left-container">
        <div className="stat-wrapper__image-wrapper">
          <CartIcon />
        </div>
        <div className="stat-wrapper__searches">
          <div className="stat-wrapper__searches-items">
            <div className="stat-wrapper__search-item">Sales</div>
            <div className="stat-wrapper__search-item stat-wrapper__searches-light">
              {data.str1.toFixed(3)}
            </div>
            <div className="stat-wrapper__search-item stat-wrapper__searches-lighter">
              {data.str2.toFixed(3)}
            </div>
          </div>

          <div className="stat-wrapper__searches-items-right">
            <div className="stat-wrapper__yesterday margin-t-1">
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
        <span className="stat-wrapper__right-container-title">
          STR:{" "}
          {data.str1 && data.str2
            ? ((data.str1 + data.str2) / 2).toFixed(3)
            : " 0,12"}{" "}
          %
        </span>
        <span className="stat-wrapper__right-container-title">
          Avg. Check:{" "}
          {data.str1 && data.str2
            ? ((data.str1 + data.str2) / 2).toFixed(2)
            : " 0,12"}{" "}
        </span>
        <span className="stat-wrapper__right-container-comment">
          You get 100% traffic on mobile and desktop devices.
        </span>
        <div className="stat-wrapper__right-container-help-text">
          <span className="stat-wrapper__yesterday">Help:</span>
          <span className="stat-wrapper__right-container-blue-text">
            {" "}
            STR, Bookings, Avg. Check
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
