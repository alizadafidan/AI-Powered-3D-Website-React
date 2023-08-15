import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation
} from "../config/motion.js";

import state from "../store/index.js";

const Home = () => {
  const snap = useSnapshot(state);
  return <div>Home</div>;
};

export default Home;
