import React from "react";
import { motion } from "framer-motion";

// @ts-ignore
const SvgComponent = props => (
  <svg
    width={194.061}
    height={168.328}
    viewBox="0 0 194.061 168.328"
    {...props}
  >
    <motion.g
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.8 }}
      >
    <path
      fill="none"
      stroke="#e5e5e5"
      d="M13.982 55.84L70.964.358M126.446 55.84L183.428.358M70.514.508h113.064M14.432 55.39L.486 112.822M13.982 55.84h112.464M183.427.358l4.438 20.467 5.706 26.314"
    />
    <path
      d="M127.024 168.304l7.459-7.662 46.367-47.625.141-52.974s20.828-20.983 9.489-10.149-54.847 53.486-54.847 53.486l-9.036-45.064z"
      fill="#e5e5e5"
    />
    <path
      d="M126.61 55.843l.417 112.45-112.993.031-.455-56.457h99.848z"
      fill="#cfcfcf"
    />
    <path d="M13.572 112.631H.75" fill="none" stroke="#e5e5e5" />
    </motion.g>
  </svg>
);

export default React.memo(SvgComponent);;

