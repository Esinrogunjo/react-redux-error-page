import React from "react";
import YellowSquare from "../atoms/YellowSquare";

const Progress = ({ width, color }: { width: string; color: string }) => {
  return (
    <div
      className="wrapper__progress-item-yellow "
      style={{ width: width, background: color }}
    ></div>
  );
};

export default Progress;
