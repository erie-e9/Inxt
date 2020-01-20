import React from "react";
import { motion } from "framer-motion";

// @ts-ignore
const SvgComponent = props => (
  <svg width={198} height={159} viewBox="0 0 168 179" {...props}>
    <motion.g
      animate={{
        rotate: 360 / 6,
        scale: 1,
        x: ["0px", "0px", "0px"],
        y: ["0px", "5px", "0px"],
      }}
      transition={{
        duration: 1,
        loop: Infinity,
        repeatDelay: 1
      }}
      >
      <path
        d="M43 99.25L83.5 76 124 99.25v46.5L83.5 169 43 145.75z"
        fill="#e5e5e5"
      />
    </motion.g>
    <motion.g
      animate={{
        rotate: 360 / 6,
        scale: 1,
        x: ["0px", "-5px", "0px"],
        y: ["0px", "-5px", "0px"],
      }}
      transition={{
        duration: 1,
        loop: Infinity,
        repeatDelay: 1
      }}
      >
      <path d="M0 23.25L40.5 0 81 23.25v46.5L40.5 93 0 69.75z" fill="#d8d8d8" />
    </motion.g>
    <motion.g
      animate={{
        rotate: 360 / 6,
        scale: 1,
        x: ["0px", "5px", "0px"],
        y: ["0px", "-5px", "0px"],
      }}
      transition={{
        duration: 1,
        loop: Infinity,
        repeatDelay: 1
      }}
      >
      <path
        d="M87 23.25L127.5 0 168 23.25v46.5L127.5 93 87 69.75z"
        fill="#cfcfcf"
      />
    </motion.g>
  </svg>
);

export default React.memo(SvgComponent);;

