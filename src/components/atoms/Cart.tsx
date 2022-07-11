import * as React from "react";
import { SVGProps } from "react";

const Cart = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#2196F3"
    />
    <path
      d="M40 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      fill="#8BC34A"
      stroke="#fff"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 14v2h2l3.595 7.585-1.35 2.45c-.155.29-.245.615-.245.965a2 2 0 0 0 2 2h12v-2H19.425c-.14 0-.25-.11-.25-.25 0-.045.01-.085.03-.12L20.1 25h7.45c.75 0 1.405-.415 1.75-1.03l3.575-6.49A1 1 0 0 0 32 16H17.215l-.95-2H13Zm6 16a1.99 1.99 0 0 0-1.99 2c0 1.105.885 2 1.99 2a2 2 0 1 0 0-4Zm8.01 2c0-1.105.885-2 1.99-2a2 2 0 1 1 0 4 1.99 1.99 0 0 1-1.99-2Z"
      fill="#fff"
    />
  </svg>
);

export default Cart;
