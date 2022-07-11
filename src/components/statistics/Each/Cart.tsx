import React from "react";
import CartIcon from "../../atoms/Cart";

const Cart = () => {
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
              24
            </div>
            <div className="stat-wrapper__search-item stat-wrapper__searches-lighter">
              24
            </div>
          </div>

          <div className="stat-wrapper__searches-items-right">
            <div className="stat-wrapper__yesterday margin-t-1">Yesterday</div>
            <div className="stat-wrapper___last-friday">Last friday</div>
          </div>
        </div>
      </div>

      <div className="stat-wrapper__right_container">
        <span className="stat-wrapper__right-container-title">STR: 6.2%</span>
        <span className="stat-wrapper__right-container-title">
          Avg. Check: 8 903
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
