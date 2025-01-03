import { cubicBezier } from "framer-motion/dom";

export const transition1 = {
    duration: 1.3,
    delay: 0,
    ease: cubicBezier(0.25, 0.1, 0.25, 1),
    // ease: [0.43, 0.13, 0.23, 0.96],
};