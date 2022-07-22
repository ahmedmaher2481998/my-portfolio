import React from 'react'
import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={5} mb={6} align="center">
        Hello,I&apos;m a Frontend Developer based in Egypt
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant="page-title">
            Ahmed Maher
          </Heading>
          <p>Passionate Software Developer (React / Next.js /Node.js)</p>
        </Box>
        <Box flexShrink={1} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image
            borderColor={useColorModeValue('whiteAlpha.600', 'whiteAlpha.800')}
            borderWidth={2}
            borderStyle="solid"
            maxWidth="200px"
            display={'inline-block'}
            borderRadius="full"
            src="/images/avatar.jpeg"
            alt="Personal image"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
