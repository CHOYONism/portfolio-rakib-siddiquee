import { ReactNode } from 'react'
import { Container } from '@mantine/core'
import { motion } from 'framer-motion'

import Header from './Header'
import Footer from './Footer'

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
}

type PropTypes = {
  children: ReactNode
}

const Structure = ({ children }: PropTypes) => (
  <Container pos="relative">
    <Header />

    <main>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </main>
    <Footer />
  </Container>
)

export default Structure
