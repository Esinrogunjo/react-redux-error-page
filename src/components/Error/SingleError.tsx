import React from "react";
import GreenDot from "../atoms/GreenDot";

const SingleError = () => {
  return (
    <div className="single-error">
      <div className="single-error__error-container">
        <GreenDot className="single-error__dot" />
        <span className="single-error__title">Error: 0,12%</span>
      </div>
      <span className="single-error__average">Average: 0,11% </span>
    </div>
  );
};

export default SingleError;
