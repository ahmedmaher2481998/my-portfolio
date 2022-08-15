import { Flex, Icon, Box, chakra } from '@chakra-ui/react'

const Course = ({ icon, title, children }) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          _light={{
            bg: 'brand.500'
          }}
          color="white"
        >
          <Icon
            boxSize={6}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {icon}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          _light={{
            color: 'gray.900'
          }}
        >
          {title}
        </chakra.dt>
        <chakra.dd
          mt={2}
          color="gray.500"
          _dark={{
            color: 'gray.400'
          }}
        >
          {children}
        </chakra.dd>
      </Box>
    </Flex>
  )
}
export default Course
