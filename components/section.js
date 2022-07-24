import { motion } from 'framer-motion'
import React from 'react'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
// const StyledDiv = chakra(motion.div, {
//   shouldForwardProp: prop => {
//     return shouldForwardProp(prop) || prop === 'translation'
//   }
// })

const SectionAnimated = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay, type: 'tween' }}
      mb={6}
    >
      {children}
    </motion.div>
  )
}

export default SectionAnimated
