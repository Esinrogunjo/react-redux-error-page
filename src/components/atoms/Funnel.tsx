import * as React from "react";
import { SVGProps } from "react";

const Funnel = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#2196F3"
    />
    <path
      d="M31.872 16.597a1.075 1.075 0 0 0-.956-.597H17.083c-.402 0-.768.229-.956.597-.19.372-.165.817.065 1.163l5.56 8.385a.386.386 0 0 1 .065.214v6.517c0 .62.49 1.124 1.091 1.124.196 0 .389-.056.56-.161l2.185-1.352c.326-.203.528-.572.528-.964V26.36c0-.077.023-.15.066-.215l5.56-8.383c.23-.346.255-.792.065-1.164Z"
      fill="#fff"
    />
    <path
      d="M40 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      fill="#8BC34A"
      stroke="#fff"
      strokeWidth={2}
    />
  </svg>
);

export default Funnel;
