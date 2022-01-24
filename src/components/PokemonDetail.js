import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransitionVariant } from "./animationVariants";

const PokemonDetail = () => {
  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      key="PokemonDetail"
    >
      <Outlet />
    </motion.div>
  );
};

export default PokemonDetail;
