import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
export const SpinnerComponent = () => {
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
