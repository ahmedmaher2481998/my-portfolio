import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import Body from '../../components/layout/body'
import Paragraph from '../../components/paragraph'
const GoogleClone = () => {
  return (
    <>
      <Body title={'Google clone'}>
        <Container>
          <Title>
            Google clone <Badge>Aug 2022</Badge>
          </Title>
          <Paragraph>
            Google clone using Next js and Next-auth with google provider ,it also has search
            results basic pagination, and search results in images with log in capabilities and
            responsive layout .
          </Paragraph>
          <List mt={5} ml={5} mb={5}>
            <ListItem>
              <Meta>Tools used</Meta>
              Next js, next Auth, TailwindCss, html-react-parser, google cloud
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Live</Meta>{' '}
              <Link href="https://google-clone-v1.vercel.app" target={'_blank'}>
                google-clone-v1.vercel.app
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Repo</Meta>{' '}
              <Link href="https://github.com/ahmedmaher2481998/google-clone" target={'_blank'}>
                github.com/ahmedmaher2481998/google-clone
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
          </List>

          <WorkImage src={'/images/google-clone/google-clone.png'} alt={'Google home page '} />
          <WorkImage src={'/images/google-clone/search.png'} alt={'Google search results '} />
          <WorkImage src={'/images/google-clone/images.png'} alt={'Google image results '} />
        </Container>
      </Body>
    </>
  )
}

export default GoogleClone
