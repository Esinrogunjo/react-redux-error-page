import * as React from "react";
import { SVGProps } from "react";

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      opacity={0.22}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.246.17A29.786 29.786 0 0 1 .595 0l3.251 63.406H0l4.5 5 4.5-5H5.192L9.246.17Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={9.246}
        y1={68.406}
        x2={9.246}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" />
        <stop offset={1} stopColor="#A9D9FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default Arrow;
