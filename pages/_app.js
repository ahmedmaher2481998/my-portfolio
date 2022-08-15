import { ChakraProvider, Container } from '@chakra-ui/react'
import Layout from '../components/layout/Main'
import theme from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Footer from '../components/Footer'
const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />

        <Footer />
      </Layout>
    </ChakraProvider>
  )
}
export default Website
