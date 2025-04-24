"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function SkillsItems({ skills }) {
  return (
    <motion.div
      className="grid grid-cols-2 xl:grid-cols-8 2xl:grid-cols-7 gap-5"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-slate-200 dark:bg-slate-800 text-grey-200 rounded-md shadow-md py-5 px-0 2xl:py-5 2xl:px-3 flex justify-center items-center cursor-not-allowed"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center justify-center">
            <h5 className="text-md 2xl:text-lg mb-1">{skill.iconTitle}</h5>
            <i
              className={`${skill.iconClass} devicon text-3xl 2xl:text-5xl text-blue-500 dark:text-blue-100`}
            ></i>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SkillsItems;
