import React from 'react'
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import SectionAnimated from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
//main component
/* TODO 
1-fixing the underline from the section-title variant 
2-fixing the animation duration 
3- make the delay form the sequence while showing the Bio/work/hobbies sections in the home page 

*/
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
      {/* here goes the Bio/Work/Hobbies , the wrapper is used for animation */}
      {/* Work Section */}
      <SectionAnimated delay={0.1}>
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
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </SectionAnimated>
      {/* End of Work Section */}
      {/* Bio Section */}
      <SectionAnimated delay={0.3}>
        <Heading as="h3" variant={'section-title'}>
          Bio
        </Heading>

        <BioSection>
          <BioYear>1998</BioYear>
          {/* <BioYear>August 1998</BioYear> */}
          Born in Bani-suef Egypt.
        </BioSection>

        <BioSection>
          <BioYear>2016</BioYear>
          {/* <BioYear>August 2016</BioYear> */}
          Started studying in BNS university faculty of engineering.
        </BioSection>

        <BioSection>
          <BioYear>2021</BioYear>
          {/* <BioYear>June 2021</BioYear> */}
          Started Learning to code & fundamentals of programming/CS, started
          Cs50.
        </BioSection>

        <BioSection>
          <BioYear>2021</BioYear>
          {/* <BioYear>September 2021</BioYear> */}
          Starting learning web development using the odin project & other
          resources.
        </BioSection>

        <BioSection>
          {/* <BioYear>April 2022</BioYear> */}
          <BioYear>2022</BioYear>
          {/* <BioYear>April 2022</BioYear> */}
          Started ITI Leaps program (Mentoring fullStack program using JS) as
          mentee.
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          {/* <BioYear>July 2022</BioYear> */}
          Graduated from BNS faculty of engineering civil department.
        </BioSection>
      </SectionAnimated>
      {/* Enf of Bio Section */}
      {/* Hobbies Section */}
      <SectionAnimated delay={0.5}>
        I 🤍:<Paragraph>Movies</Paragraph>
        <Paragraph
          _hover={{
            background: 'white',
            color: 'teal.500'
          }}
        >
          <a
            href="https://soundcloud.com/a_maher_938"
            target={'_blank'}
            rel="noreferrer"
          >
            Music
          </a>
        </Paragraph>
        <Paragraph>Video games</Paragraph>
        <Paragraph
          _hover={{
            background: 'white',
            color: 'teal.500'
          }}
        >
          <a
            href="https://www.reddit.com/user/ahmedmaher2481998"
            target={'_blank'}
            rel="noreferrer"
          >
            reddit
          </a>
        </Paragraph>
      </SectionAnimated>
    </Container>
  )
}

export default Page
