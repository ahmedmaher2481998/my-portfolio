import { motion } from 'framer-motion'
import React from 'react'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})
const SectionAnimated = ({ children, delay = 0.1 }) => {
  return (
    <StyledDiv
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, type: 'ease-in-out' }}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default SectionAnimated
