import React from 'react'
import { motion } from 'framer-motion'
import Body from '../components/layout/body'
import { Container, Box, Heading, Image, Button, useColorModeValue, List } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import SectionAnimated from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import SocialLink from '../components/socialLink'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'
//main component

const Page = () => {
  const heart = useColorModeValue('black', 'white')
  return (
    <Body title={'Home'}>
      <Container>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
            p={5}
            mb={6}
            align="center"
          >
            Hello,I&apos;m a Frontend Developer based in Egypt
          </Box>
        </motion.div>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant="page-title">
              Ahmed Maher
            </Heading>
            <p>Passionate Software Developer (React / Next.js /Node.js)</p>
          </Box>
          <Box flexShrink={1} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image
              borderColor={useColorModeValue('whiteAlpha.600', 'whiteAlpha.800')}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display={'inline-block'}
              // rounded={""}
              borderRadius="10px 3em 10px"
              src="/profile.jpeg"
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
            Having graduated in bachelor degree Civil engineering, my passion for technology &
            creative problem-solving led me to Harvard&apos;s CS50 and The Odin Project. Albeit a
            challenging turn, I gained experience in JavaScript&apos;s diverse ecosystem and
            developed a passion for Frontend development. Self-motivated, with a passion for
            learning and experienced in React,Next,js ,Redux ,tailwindCss , styled Components ,
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

        {/* Bio Section */}
        <SectionAnimated delay={0.2}>
          <Heading as="h3" variant={'section-title'}>
            Bio
          </Heading>

          <BioSection>
            <BioYear>1998-8</BioYear>
            Born in Bani-suef Egypt.
          </BioSection>

          <BioSection>
            <BioYear>2016-8</BioYear>
            Started studying in BNS university faculty of engineering.
          </BioSection>

          <BioSection>
            <BioYear>2021-5</BioYear>
            Started Learning to code & fundamentals of programming/CS, started Cs50.
          </BioSection>

          <BioSection>
            <BioYear>2021-9</BioYear>
            Starting learning web development using the odin project & other resources.
          </BioSection>

          <BioSection>
            <BioYear>2022-4</BioYear>
            Started ITI Leaps program (Mentoring fullStack program using JS) as mentee.
          </BioSection>

          <BioSection>
            <BioYear>2022</BioYear>
            Graduated from BNS faculty of engineering civil department.
          </BioSection>
        </SectionAnimated>
        {/* Enf of Bio Section */}
        {/* Hobbies Section */}
        <SectionAnimated delay={0.3}>
          <Heading as="h3" variant={'section-title'}>
            I {heart === 'black' ? '🖤 ' : '🤍'}:
          </Heading>
          &nbsp; &nbsp;Movies 🎥, &nbsp; Books 📚 , &nbsp;Sci-Fi ⚛ ,&nbsp;
          <a href="https://soundcloud.com/a_maher_938" target={'_blank'} rel="noreferrer">
            Music 🎵 ,&nbsp;
          </a>
          Video games 🎮 ,
          <a
            href="https://www.reddit.com/user/ahmedmaher2481998"
            target={'_blank'}
            rel="noreferrer"
          >
            <span>Reddit 🌐</span>
          </a>
        </SectionAnimated>
        {/* Social media links & accounts  */}
        <SectionAnimated delay={0.3}>
          <Heading as="h3" variant={'section-title'}>
            My accounts
          </Heading>
          <List>
            <SocialLink href={'https://github.com/ahmedmaher2481998'} icon={<IoLogoGithub />}>
              @ahmedmaher2481998
            </SocialLink>
            <SocialLink
              href={'https://www.linkedin.com/in/ahmedmaher2481998'}
              icon={<IoLogoLinkedin />}
            >
              @ahmedmaher2481998
            </SocialLink>
            <SocialLink href={'https://twitter.com/A_maher_938'} icon={<IoLogoTwitter />}>
              @A_maher_938
            </SocialLink>
            <SocialLink href={'https://www.instagram.com/a.maher.938/'} icon={<IoLogoInstagram />}>
              @a.maher.938
            </SocialLink>

            <SocialLink href={'mailto:ahmedmaher2481998@gmail.com'} icon={<SiGmail />}>
              @ahmedmaher2481998
            </SocialLink>
          </List>
        </SectionAnimated>
      </Container>
    </Body>
  )
}

export default Page
