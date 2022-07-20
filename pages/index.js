import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="pink" p={5} mb={6} align="center">
        Hello,I&apos;m a Frontend Developer based in Egypt
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant="page-title">
            Ahmed Maher
          </Heading>
          <p>Passionate Software Developer (React / Next.js /Node.js)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
