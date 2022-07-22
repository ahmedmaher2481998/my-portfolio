import React from 'react'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import SectionAnimated from '../components/section'
import Paragraph from '../components/paragraph'
//main component
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
        p={5}
        mb={6}
        align="center"
      >
        Hello,I&apos;m a Frontend Developer based in Egypt
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant="page-title">
            Ahmed Maher
          </Heading>
          <p>Passionate Software Developer (React / Next.js /Node.js)</p>
        </Box>
        <Box
          flexShrink={1}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor={useColorModeValue('whiteAlpha.600', 'whiteAlpha.800')}
            borderWidth={2}
            borderStyle="solid"
            maxWidth="200px"
            display={'inline-block'}
            borderRadius="full"
            src="/images/avatar.jpeg"
            alt="Personal image"
          />
        </Box>
      </Box>
      <SectionAnimated delay={0.1}>
        {/* here goes the Bio/Work/Hobbies , the wrapper is used for animation */}
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Having graduated in bachelor degree Civil engineering, my passion for
          technology & creative problem-solving led me to Harvard&apos;s CS50
          and The Odin Project. Albeit a challenging turn, I gained experience
          in JavaScript&apos;s diverse ecosystem and developed a passion for
          Frontend development. Self-motivated, with a passion for learning and
          experienced in React,Next,js ,Redux ,tailwindCss , styled Components ,
          typeScript , MUI.
        </Paragraph>
      </SectionAnimated>
    </Container>
  )
}

export default Page
