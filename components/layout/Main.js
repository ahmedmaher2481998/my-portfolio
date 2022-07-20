import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../Navbar'

const Main = ({ children, router }) => {
  return (
    <>
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="ahmed maher's portfolio" />
          <meta name="author" content="Ahmed Maher" />
          <title>Ahmed Maher | Homepage</title>
        </Head>
        <Navbar path={router.asPath} />
        <Container MaxW="container.md" pt={14}>
          {children}
        </Container>
      </Box>
    </>
  )
}

export default Main
