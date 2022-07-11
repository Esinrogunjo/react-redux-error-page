import React from "react";
import SingleError from "./SingleError";
import "./ErrorTop.scss";
import Progress from "./Progress";
import ErrorDown from "./ErrorDown";

const ErrorTop = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__top-error-wapper">
        <SingleError />
        <SingleError />
        <SingleError />
      </div>
      <div className="wrapper__progress">
        <Progress width="14.75rem" color="#FFCC00" />
        <Progress width="9.8125rem" color="#5856D5" />
        <Progress width="8.125rem" color="#2196F3" />
        <Progress width="5.125rem" color="#A0B0B9" />
      </div>
      <div className="wrapper__error-down">
        <ErrorDown color="#FFCC00" />
      </div>
    </div>
  );
};

export default ErrorTop;
