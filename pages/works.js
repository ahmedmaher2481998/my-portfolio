import React from 'react'
import SectionAnimated from '../components/section'
import Body from '../components/layout/body'
import { WorkGridItem } from '../components/grid'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import test from '../public/images/works/00.png'
const Works = () => {
  return (
    <>
      <Body title="Works">
        <Heading as={'h3'} fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid column={[1, 2, 2]} gap={8}>
          <p>this is works </p>
          {/* Works goes in here */}
          {/* <SectionAnimated delay={0.2}>
          <WorkGridItem id="blabla" title="blabla blabla " src={test}>
            This is a test work
            </WorkGridItem>
            <p>test</p>
          </SectionAnimated> */}
          <Divider my={6} />
        </SimpleGrid>
      </Body>
    </>
  )
}

export default Works
