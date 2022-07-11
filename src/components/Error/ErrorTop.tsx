import React from "react";
import SingleError from "./SingleError";
import "./ErrorTop.scss";
import Progress from "./Progress";
import ErrorDown from "./ErrorDown";
import { useSelector } from "react-redux";
import { random_hex_color_code } from "../helper";

const ErrorTop = () => {
  const days = useSelector((state: any) => state.errorReducer.day);
  const data = useSelector((state: any) => state.errorReducer.data);

  return (
    <div className="wrapper">
      <div className="wrapper__top-error-wapper">
        <SingleError data={data} />
        <SingleError data={data} />
        <SingleError data={data} />
      </div>
      <div className="wrapper__progress">
        <Progress width="14.75rem" color="#FFCC00" />
        <Progress width="9.8125rem" color="#5856D5" />
        <Progress width="8.125rem" color="#2196F3" />
        <Progress width="5.125rem" color="#A0B0B9" />
      </div>
      <div className="wrapper__error-down">
        {days.map((item: { code?: number; count?: number }, index: number) => {
          const color = random_hex_color_code();
          return (
            <ErrorDown key={`key-Error-${index}`} item={item} color={color} />
          );
        })}
      </div>
    </div>
  );
};

export default ErrorTop;
