import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Heading, Link, List, ListItem, UnorderedList } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import Body from '../../components/layout/body'
import Paragraph from '../../components/paragraph'
const ComfySloth = () => {
  return (
    <>
      <Body title={'ComfySloth'}>
        <Container>
          <Title>
            ComfySloth <Badge>May 2022</Badge>
          </Title>
          <Paragraph>
            ComfySloth is an E-commerce Website for selling furniture,powered by React ,and consumes
            json data from a Api endpoint,the app has sing in/out with auth0, persist cart data
            using localStorage browser api,and use react Context with redux pattern to manage the
            app state
          </Paragraph>
          <List mt={5} ml={5} mb={5}>
            <ListItem>
              <Meta>Tools used</Meta>
              React, context Api, StyledComponents ,Auth0 ,stripe ,netlify functions
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Live</Meta>{' '}
              <Link href="https://comfy-sloth-maher.netlify.app/" target={'_blank'}>
                comfy-sloth-maher.netlify.app/
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Repo</Meta>{' '}
              <Link href="https://github.com/ahmedmaher2481998/e-commerce" target={'_blank'}>
                github.com/ahmedmaher2481998/e-commerce
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
          </List>
          <Heading as="h3" variant={'section-title'}>
            Features
          </Heading>
          <UnorderedList mt={4} ml={4} mb={8}>
            <ListItem>singing in/out with E-mail/google/facebook/twitter using auth0 </ListItem>
            <ListItem>checking out and paying with credit card using stripe </ListItem>
            <ListItem>persisting cart items in localStorage </ListItem>
            <ListItem>filtering products by price/category / color/ ect... </ListItem>
            <ListItem>responsive in all devices </ListItem>
            <ListItem>subscribing to letter news with email </ListItem>
            <ListItem>JSON-provided data </ListItem>
          </UnorderedList>
          <WorkImage src={'/images/e-commerce/home-page.png'} alt={'home page'} />
          <WorkImage src={'/images/e-commerce/products.png'} alt={'products  page in list mode '} />
          <WorkImage src={'/images/e-commerce/single-product.png'} alt={'single product  '} />
          <WorkImage src={'/images/e-commerce/stripe.png'} alt={'stripe confirmation'} />
        </Container>
      </Body>
    </>
  )
}

export default ComfySloth
