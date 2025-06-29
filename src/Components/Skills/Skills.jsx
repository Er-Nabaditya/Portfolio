import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGithub, FaDatabase, FaJava } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiC, SiCplusplus } from 'react-icons/si'
import { motion } from 'framer-motion'

const boxVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 120,
      damping: 14
    }
  }),
  hover: {
    opacity: 1,
    scale: 1.03,
    transition: { duration: 0.4, ease: "easeInOut" }
  }
}

const Skills = () => {
  return (
    <section id='skills' className="py-12 px-4">
      {/* Heading with two different underline sticks */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center tracking-wide drop-shadow-lg uppercase">
          <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        {/* Two underlines: one long, one short, both thin */}
        <div className="flex flex-col items-center mt-2">
          <div className="h-1 w-56 bg-amber-300 rounded-full mb-2 shadow-[0_0_8px_2px_rgba(251,191,36,0.7)]"></div>
          <div className="h-1 w-76 bg-yellow-200 rounded-full shadow-[0_0_6px_1px_rgba(253,224,71,0.5)]"></div>
        </div>
        <p className="text-gray-300 text-center mt-4 max-w-2xl">
          A collection of my technical skills and expertise honed through various projects and experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto cursor-pointer">
        {/* Frontend */}
        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg border-2 neon-skill-border"
          custom={0}
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-amber-400 mb-4 text-center">Frontend</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="flex items-center gap-2 text-white"><FaHtml5 className="text-orange-500" /> HTML</span>
            <span className="flex items-center gap-2 text-white"><FaCss3Alt className="text-blue-400" /> CSS</span>
            <span className="flex items-center gap-2 text-white"><SiTailwindcss className="text-cyan-400" /> Tailwind CSS</span>
            <span className="flex items-center gap-2 text-white"><FaJs className="text-yellow-400" /> JavaScript</span>
            <span className="flex items-center gap-2 text-white"><FaReact className="text-cyan-300" /> React.js</span>
          </div>
        </motion.div>
        {/* Backend */}
        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg border-2 neon-skill-border"
          custom={1}
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-amber-400 mb-4 text-center">Backend</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="flex items-center gap-2 text-white"><FaPhp className="text-indigo-400" /> PHP</span>
            <span className="flex items-center gap-2 text-white"><FaNodeJs className="text-green-500" /> Node.js</span>
            <span className="flex items-center gap-2 text-white"><SiMysql className="text-blue-300" /> MySQL</span>
          </div>
        </motion.div>
        {/* Languages */}
        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg border-2 neon-skill-border"
          custom={2}
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-amber-400 mb-4 text-center">Languages</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="flex items-center gap-2 text-white"><SiC className="text-blue-500" /> </span>
            <span className="flex items-center gap-2 text-white"><SiCplusplus className="text-blue-300" /> </span>
            <span className="flex items-center gap-2 text-white"><FaJava className="text-red-500" /> Java</span>
            <span className="flex items-center gap-2 text-white"><FaJs className="text-yellow-400" /> JavaScript</span>
          </div>
        </motion.div>
        {/* Tools */}
        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg border-2 neon-skill-border"
          custom={3}
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-amber-400 mb-4 text-center">Tools</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="flex items-center gap-2 text-white"><FaGithub className="text-white" /> GitHub</span>
            <span className="flex items-center gap-2 text-white">VS Code</span>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default Skills