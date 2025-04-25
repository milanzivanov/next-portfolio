"use client";

import { motion } from "framer-motion";

import PortfolioCard from "./PortfolioCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

function PortfolioCardContainer({ works }) {
  return (
    <motion.div
      className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 dark:bg-slate-800 p-5 md:rounded-md mb-5"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {works.map((work) => (
        <PortfolioCard key={work.id} work={work} />
      ))}
    </motion.div>
  );
}

export default PortfolioCardContainer;
