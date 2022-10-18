import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import Body from '../../components/layout/body'
import Paragraph from '../../components/paragraph'
const BattleShip = () => {
  return (
    <>
      <Body title={'NetflixV2'}>
        <Container>
          <Title>
            Netflix-v2 <Badge>August 2022</Badge>
          </Title>
          <Paragraph>
            A netflix clone with full authentication/real time search using react, firebase,
            styled-components ,jest and compound components design pattern,and have unit tests with
            full code coverage using jest & react testing library
          </Paragraph>
          <List mt={5} ml={5} mb={5}>
            <ListItem>
              <Meta>Tools used</Meta>
              React (Compound components), react context api, react-router-dom, firebase (auth,
              firestore), StyledComponents, Jest, react testing library, fuse.js
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Live</Meta>{' '}
              <Link href="https://netflix-ahmedmaher-v2.vercel.app/" target={'_blank'}>
                netflix-ahmedmaher-v2.vercel.app
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Repo</Meta>{' '}
              <Link href="https://github.com/ahmedmaher2481998/netflix-v2" target={'_blank'}>
                github.com/ahmedmaher2481998/netflix-v2
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
          </List>

          <WorkImage src={'/images/netflix-v2/browse.png'} alt={'browse page img'} />
          <WorkImage src={'/images/netflix-v2/md-home.png'} alt={'home page img'} />
        </Container>
      </Body>
    </>
  )
}

export default BattleShip
