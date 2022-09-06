import SectionAnimated from '../components/section'
import Body from '../components/layout/body'
import { WorkGridItem } from '../components/grid'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import comfySloth from '../public/images/e-commerce/home-page.png'
import battleShip from '../public/images/battleship-images/welcome-xl.png'
import forkify from '../public/images/forkify/recpie.png'
import GoogleClone from '../public/images/google-clone/google-clone.png'
import Netflix from '../public/images/netflix-v2/browse.png'

const Works = () => {
  return (
    <>
      <Body title="Works">
        <Container>
          <Heading as={'h3'} fontSize={20} mb={4}>
            Works
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <SectionAnimated delay={0.1}>
              <WorkGridItem title="Netflix-v2" id={'netflix-v2'} src={Netflix}>
                netflix clone ,with react compound components pattern and full code coverage
              </WorkGridItem>
            </SectionAnimated>
            <SectionAnimated delay={0.2}>
              <WorkGridItem title="Google clone" id={'google-clone'} src={GoogleClone}>
                A next.js App with SSR Google clone with authentication and pagination .
              </WorkGridItem>
            </SectionAnimated>
            <SectionAnimated delay={0.3}>
              <WorkGridItem title="BattleShip" id={'react-battleShip'} src={battleShip}>
                A fully responsive BattleShip game made in react / redux and other tools.
              </WorkGridItem>
            </SectionAnimated>
            <SectionAnimated delay={0.1}>
              <WorkGridItem title="ComfySloth" id={'comfy-sloth'} src={comfySloth}>
                ComfySloth is an E-commerce Website for selling furniture,powered by
                React/context-Api / Stripe.
              </WorkGridItem>
            </SectionAnimated>
            <SectionAnimated delay={0.4}>
              <WorkGridItem title="Forkify" id={'forkify'} src={forkify}>
                A Recipe search engine, powered by vanilla javascript / sass ,it uses the MVC model
              </WorkGridItem>
            </SectionAnimated>
          </SimpleGrid>
        </Container>
      </Body>
    </>
  )
}

export default Works
