import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import Body from '../../components/layout/body'
import Paragraph from '../../components/paragraph'
const Forkify = () => {
  return (
    <>
      <Body title={'Forkify'}>
        <Container>
          <Title>
            Forkify <Badge>February 2022</Badge>
          </Title>
          <Paragraph>
            Forkify is a recipe search engine made using api and javascript , it uses the mvc model
            to septate the logic from the view as much as possible, it also uses es 15 / latest js
            features and support them for older browsers using pollyFillers & babel,the styling is
            done using Sass, and the project heavily uses OOP based architecture while consisting of
            readable and maintainable code bas ,
          </Paragraph>
          <List mt={5} ml={5} mb={5}>
            <ListItem>
              <Meta>Tools used</Meta>
              parcel , vanilla javascript ,Browser Apis ,js polly fillers ,babel, sass .
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Live</Meta>{' '}
              <Link href="https://js-project-pi.vercel.app/" target={'_blank'}>
                js-project-pi.vercel.app/
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Repo</Meta>{' '}
              <Link href="https://github.com/ahmedmaher2481998/Forkify" target={'_blank'}>
                github.com/ahmedmaher2481998/Forkify
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
          </List>

          <WorkImage src={'/images/forkify/home.png'} alt={'home page'} />
          <WorkImage src={'/images/forkify/recpie.png'} alt={'preview recipe  '} />
          <WorkImage src={'/images/forkify/bookmark.png'} alt={'bookmark recipe '} />
          <WorkImage src={'/images/forkify/upload recipe.png'} alt={'upload recipe'} />
        </Container>
      </Body>
    </>
  )
}

export default Forkify

// https://js-project-pi.vercel.app/
// https://github.com/ahmedmaher2481998/jsProject
