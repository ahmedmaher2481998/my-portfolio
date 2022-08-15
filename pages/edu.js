import React from 'react'
import { Box, Flex, Stack, Icon, chakra } from '@chakra-ui/react'
import Course from '../components/Course'

const Edu = () => {
  return (
    <Flex w="auto" justifyContent="center" alignItems="center">
      <Box
        py={12}
        bg="white"
        _dark={{
          bg: 'gray.800'
        }}
        rounded="xl"
      >
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
              Transactions
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{
                base: '3xl',
                sm: '4xl'
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              _light={{
                color: 'gray.900'
              }}
            >
              A better way to send money
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
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
              cupiditate veritatis in accusamus quisquam.
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
                title="Competitive exchange rates"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </Course>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default Edu
