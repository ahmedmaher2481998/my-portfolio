import SectionAnimated from '../components/section'
import Body from '../components/layout/body'
import { WorkGridItem } from '../components/grid'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import homepage from '../public/images/e-commerce/home-page.png'
import battleShip from '../public/images/battleship-images/welcome-xl.png'
import { createRef } from 'react'
import { forwardRef } from 'react'

const Works = () => {
  return (
    <>
      <Body title="Works">
        <Container>
          <Heading as={'h3'} fontSize={20} mb={4}>
            Works
          </Heading>

          <SimpleGrid column={[1, 1, 2]} gap={6}>
            {/* <p>this is works </p> */}
            {/* Works goes in here */}
            <SectionAnimated delay={0.2}>
              <WorkGridItem
                title="this is an image from the project i worked on  "
                id={'123'}
                src={homepage}
              >
                A Furniture E-commerce with connected with stripe and has advanced filter{' '}
              </WorkGridItem>
              <p>test</p>
            </SectionAnimated>
            <Divider my={6} />
          </SimpleGrid>
        </Container>
      </Body>
    </>
  )
}

export default Works
