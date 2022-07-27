import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => {
  return (
    <Spinner
      size={'xl'}
      position="absolute"
      left="50%"
      top="50%"
      ml="calc(0px - var(--spinner-size)/2)"
      mt="calc(0px - var(--spinner-size))"
    ></Spinner>
  )
}

export const ModelContainer = forwardRef(({ children }, ref) => {
  return (
    <Box
      ref={ref}
      className="modelContainer"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
  )
})
ModelContainer.displayName = 'ModelContainer'

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  )
}

export default Loader
