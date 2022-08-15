import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import Body from '../../components/layout/body'
import Paragraph from '../../components/paragraph'
const BattleShip = () => {
  return (
    <>
      <Body title={'BattleShip'}>
        <Container>
          <Title>
            React BattleShip <Badge>june 2022</Badge>
          </Title>
          <Paragraph>
            React BattleShip is a responsive & interactive game inspired from the odinProject,
            it&apos;s fully responsive BattleShip game made in react/redux and other tools , the
            game is 5 pages and has 3 reducers to mange actions & state ,it optimizes DRY concept
            while writing maintainable and readable code and using other react best practices , the
            rules of the game is explained in it ,you can start playing after entering your name
            ,the game routes is protected by the name , it won&apos;t work unless you provide your
            name ,and you can choose to make the game remember that so you don&apos;t need to enter
            it again, and there&apos;s a dashboard for all the results where you can see all the
            other games result and other information.
          </Paragraph>
          <List mt={5} ml={5} mb={5}>
            <ListItem>
              <Meta>Tools used</Meta>
              React , Redux , TailwindCss, Framer Motion
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Live</Meta>{' '}
              <Link href="https://battleship-react-amaher938.netlify.app" target={'_blank'}>
                battleship-react-amaher938.netlify.app
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
            <ListItem color={'purple.500'}>
              <Meta>Repo</Meta>{' '}
              <Link href="https://github.com/ahmedmaher2481998/react-battleships" target={'_blank'}>
                github.com/ahmedmaher2481998/react-battleships
                <ExternalLinkIcon mx={4} />
              </Link>
            </ListItem>
          </List>

          <WorkImage src={'/images/battleship-images/welcoem-md.png'} alt={'Welcome page'} />
          <WorkImage src={'/images/battleship-images/welcome-xl.png'} alt={'Welcome page in xl '} />
          <WorkImage src={'/images/battleship-images/rules-md.png'} alt={'rules page '} />
          <WorkImage src={'/images/battleship-images/place-xl.png'} alt={'placing page image '} />
          <WorkImage src={'/images/battleship-images/place-md.png'} alt={'placing page image '} />
          <WorkImage src={'/images/battleship-images/battle1.png'} alt={'Battle page image'} />
          <WorkImage src={'/images/battleship-images/battle-1.png'} alt={'Battle page image'} />
          <WorkImage src={'/images/battleship-images/winner.png'} alt={'Winner page'} />
          <WorkImage src={'/images/battleship-images/results-board.png'} alt={'Result board'} />
        </Container>
      </Body>
    </>
  )
}

export default BattleShip
