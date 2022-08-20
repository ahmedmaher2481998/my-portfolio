import React from 'react'
import SectionAnimated from '../components/section'

import { Image, Box, Flex, chakra, Link, useColorModeValue, Text } from '@chakra-ui/react'
const About = () => {
  const bg = useColorModeValue('gray.300', '#202023')
  return (
    <SectionAnimated delay={0.3}>
      <Flex borderRadius={20} bg={bg} p={50} w="full" alignItems="center" justifyContent="center">
        <Box mx="auto" rounded="lg" shadow="md" bg={bg} maxW="2xl">
          <Image
            placeholder="blur"
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src={'/cs50.png'}
            alt="Article"
          />

          <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{
                  color: 'brand.400'
                }}
              >
                cs50 Certificate
              </chakra.span>
              <Text
                display="block"
                color="gray.800"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{
                  color: 'gray.600'
                }}
              >
                My coding journey...
              </Text>
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: 'gray.400'
                }}
              >
                in may 2021 i started my first programming course Cs50 it was challenging and
                tough,but i remember the feeling of happiness after i solve each problem , after
                this course i found my self fascinated with programming i just couldn&apos;t stop,i
                loved creating beautiful things , so i found my passion in web dev , i started with
                the odin project ,loved every minute of it even the time was aimlessly staring at
                the blank screen ,but i did it and each time i thought i couldn&apos;t do it i was
                wrong, after that i loved react then moved for next js and picked typescript along
                the way , i acquired a lot of tools and skills during the journey and will acquire
                more in the next years i got left.cuz my journey just started ...
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={10}
                    fit="cover"
                    rounded="full"
                    src={
                      'https://avatars.githubusercontent.com/u/28991488?s=400&u=15ffb5d5801dca27349692f272c09afdd0194a88&v=4'
                    }
                    alt="Avatar"
                  />
                  <Link
                    href="https://github.com/ahmedmaher2481998"
                    target={'_blank'}
                    mx={2}
                    fontWeight="bold"
                    color="gray.700"
                    _dark={{
                      color: 'gray.200'
                    }}
                  >
                    Ahmed maher
                  </Link>
                </Flex>
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: 'gray.300'
                  }}
                >
                  August 2022
                </chakra.span>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </SectionAnimated>
  )
}

export default About
