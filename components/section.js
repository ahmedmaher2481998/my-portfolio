import { motion } from 'framer-motion'
import React from 'react'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'translation'
  }
})
const SectionAnimated = ({ children, delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay, type: 'linear' }}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default SectionAnimated
