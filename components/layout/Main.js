import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Model3D from '../model'
import { useRouter } from 'next/router'

const Main = ({ children, router }) => {
  const { pathname } = useRouter()

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
          <Box display={pathname === '/resume' ? 'none' : 'inline-block'}>
            <Model3D />
          </Box>
          {children}
        </Container>
      </Box>
    </>
  )
}

export default Main
