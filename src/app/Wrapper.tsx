'use client'

import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Structure from '@components/Structure'

type PropTypes = {
  children: ReactNode
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const AppWrapper = ({ children }: PropTypes) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      transition={{ duration: 0.4 }}
    >
      <Structure>{children}</Structure>
    </motion.div>
  </AnimatePresence>
)

export default AppWrapper
