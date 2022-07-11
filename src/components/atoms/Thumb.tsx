import * as React from "react";
import { SVGProps } from "react";

const Thumb = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#2196F3"
    />
    <path
      d="M40 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      fill="#FF6A67"
      stroke="#fff"
      strokeWidth={2}
    />
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={11}
      width={24}
      height={24}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11h24v24H12V11Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.25 18.5v3.74c-1.21-.81-2-2.18-2-3.74 0-2.49 2.01-4.5 4.5-4.5s4.5 2.01 4.5 4.5c0 1.56-.79 2.93-2 3.74V18.5a2.5 2.5 0 0 0-5 0Zm5.3 6.11 4.54 2.26c.53.22.91.76.91 1.38 0 .06-.01.13-.02.2l-.75 5.27c-.11.73-.69 1.28-1.44 1.28H23c-.41 0-.79-.17-1.06-.44L17 29.62l.79-.8c.2-.2.48-.33.79-.33.06 0 .111.009.162.018.026.004.051.009.078.012l3.43.72V18.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.76c.19 0 .37.04.54.11Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default Thumb;
