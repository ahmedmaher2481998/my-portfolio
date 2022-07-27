import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Galaxy from '../galaxy'
const Main = ({ children, router }) => {
  return (
    <>
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="ahmed maher's portfolio" />
          <meta name="author" content="Ahmed Maher" />
          <link rel="icon" type="image/x-icon" href="/fav-icon.ico" />

          <title>Ahmed Maher | Homepage</title>
        </Head>
        <Navbar path={router.asPath} />

        <Container maxWidth="container.md" pt={14}>
          <Galaxy />
          {children}
        </Container>
      </Box>
    </>
  )
}

export default Main
