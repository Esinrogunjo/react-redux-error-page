import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import YellowSquare from "../atoms/YellowSquare";

const ErrorDown = ({ color }: { color: string }) => {
  const data = useSelector((state: RootState) => state.errorReducer.day);
  console.log(data);

  if (data.length < 0) {
    return (
      <div className="single-error-down">
        <div className="single-error-down__error-container">
          <YellowSquare fill={`${color}`} className="single-error-down__dot" />
          <span className="single-error-down__title">Error 500: 1 256</span>
        </div>
      </div>
    );
  }
  //console.log(data);
  return data.map((item, i) => {
    <div className="single-error-down">
      <div className="single-error-down__error-container">
        <YellowSquare fill={`${color}`} className="single-error-down__dot" />
        <span className="single-error-down__title">Error :</span>
      </div>
    </div>;
  });
};

export default ErrorDown;
