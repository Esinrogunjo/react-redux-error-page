import React from "react";
import GreenDot from "../atoms/GreenDot";

const SingleError = ({ data }: any) => {
  return (
    <div className="single-error">
      <div className="single-error__error-container">
        <GreenDot className="single-error__dot" />
        <span className="single-error__title">
          Error:
          {data.errors1 && data.errors1
            ? ((data.errors1 + data.errors2) / 2).toFixed(3)
            : " 0,12"}{" "}
          %
        </span>
      </div>
      <span className="single-error__average">
        Average:{" "}
        {data.average1 && data.average2
          ? ((data.average1 + data.average2) / 2).toFixed(3)
          : "0,11"}
        %{" "}
      </span>
    </div>
  );
};

export default SingleError;
