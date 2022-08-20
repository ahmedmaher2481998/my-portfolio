import React from 'react'
import { Box, Flex, Stack, chakra } from '@chakra-ui/react'
import Course from '../components/Course'
import { SiUdemy } from 'react-icons/si'
import { FaGlobe } from 'react-icons/fa'
import { IoIosAppstore } from 'react-icons/io'
import { GiBookshelf } from 'react-icons/gi'
import SectionAnimated from '../components/section'
const Edu = () => {
  return (
    <SectionAnimated delay={0.3}>
      <Flex w="auto" justifyContent="center" alignItems="center">
        <Box py={12} rounded="xl">
          <Box
            maxW="7xl"
            mx="auto"
            px={{
              base: 4,
              lg: 8
            }}
          >
            <Box
              textAlign={{
                lg: 'center'
              }}
            >
              <chakra.h2
                _light={{
                  color: 'brand.600'
                }}
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Education & courses 📑
              </chakra.h2>
              <chakra.p
                mt={2}
                fontSize={{
                  base: '2xl',
                  sm: '3xl'
                }}
                lineHeight="8"
                fontWeight="extrabold"
                letterSpacing="tight"
                _light={{
                  color: 'gray.900'
                }}
              >
                these are the resources i used to learn by side building stuff on my own .
              </chakra.p>
              <chakra.p
                mt={4}
                maxW="2xl"
                fontSize="xl"
                mx={{
                  lg: 'auto'
                }}
                color="gray.500"
                _dark={{
                  color: 'gray.400'
                }}
              >
                i approach any new technology with curiosity and enthusiasm, i watch any quick video
                or visual learning material ,then i try to use it in building something i like and
                occasionally visiting the documentation upon seeking more info
              </chakra.p>
            </Box>

            <Box mt={10}>
              <Stack
                spacing={{
                  base: 10,
                  md: 0
                }}
                display={{
                  md: 'grid'
                }}
                gridTemplateColumns={{
                  md: 'repeat(2,1fr)'
                }}
                gridColumnGap={{
                  md: 8
                }}
                gridRowGap={{
                  md: 10
                }}
              >
                <Course
                  title="Harvard's Cs50"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  }
                >
                  this course helped me fall in love with programming ,and showed my what i can do
                  if learned more , i love the problem solving part and the programmatic puzzles
                  using C and python
                </Course>

                <Course title="The odin project" icon={<FaGlobe />}>
                  Here i learned Html ,Css ,Responsive Design,and javaScript fundamentals,and built
                  a lot of stuff like calculator and rock paper scissors game,multiple page website
                  and how to manipulate the dom .
                </Course>

                <Course title="Js from zero to Hero " icon={<SiUdemy />}>
                  learned more about OOP , MVC pattern and got deeper into js browser&apos;s
                  apis,class , inheritance and more js concepts ...
                </Course>

                <Course title="React jhon smilga" icon={<SiUdemy />}>
                  in this course i learned a lot more and read a lot of blogPosts & articles to
                  farther understand react and the how things work under the hood .
                </Course>

                <Course title="App Academy Full stack course " icon={<IoIosAppstore />}>
                  i started to learning React & along side learned tailwindCss and typescript on my
                  own, i also learned about the redux pattern and how to use global state manger
                  like redux or X-state or else ...
                </Course>

                <Course title="Next js learn platform" icon={<GiBookshelf />}>
                  i learned next js from the docs after learning some noe/express/mongo db
                  fundamentals,then learned about SSR,SSG, and the meaning of hydration and
                  different other concepts, i used next js to build this portfolio website .
                </Course>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </SectionAnimated>
  )
}

export default Edu
