import * as React from "react";
import { SVGProps } from "react";

const GreenDot = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z"
      fill="#8BC34A"
      stroke="#fff"
      strokeWidth={2}
    />
  </svg>
);

export default GreenDot;
