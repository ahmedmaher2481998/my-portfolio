import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'
import Logo from '../components/Logo'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="pink" p={5} mb={6} align="center">
        Hello,I&apos;m FrontEnd Developer based in Egypt
      </Box>
      <Logo />
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
