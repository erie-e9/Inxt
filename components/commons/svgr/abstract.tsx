import React from "react";
import { motion } from "framer-motion";

// @ts-ignore
const SvgComponent = props => (
  <svg
    id="prefix__abstract"
    width={200}
    height={192.757}
    viewBox="0 0 200 192.757"
    {...props}
  >
    <motion.g
      animate={{
        rotate: -360,
      }}
      transition={{
        duration: 3,
        loop: Infinity,
        // repeatDelay: 0
      }}
      >
      <path
        id="prefix__Trazado_20"
        data-name="Trazado 20"
        d="M5130.809 371.009c31.648 31.648 25.606-16.257 60 4.675 24.7 15.35-21.35 33-12.07 59.026 3.63 7.112 19.4 21.623 54.086 24.555 29.144 2.272 49.868-4.242 53.083-14.975 4.568-21.18-9.334-13.1-16.955-33.72-7.884-24.211 57.7-54.77 57.7-85.121s-67.3-61.913-97.191-58.189c-73.954 1.884-116.794 80.516-98.653 103.749z"
        transform="translate(-5126.657 -266.959)"
        fill="#e5e5e5"
      />
      <path
        id="prefix__Trazado_21"
        data-name="Trazado 21"
        d="M10.079 0A10.079 10.079 0 110 10.079 10.079 10.079 0 0110.079 0z"
        transform="translate(41.69 112.353)"
        fill="#fff"
      />
    </motion.g>
  </svg>
);

export default React.memo(SvgComponent);;

