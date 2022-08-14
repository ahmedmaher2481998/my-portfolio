import React from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoWrapper = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover img {
    transform: rotate(360deg);
    transition: 1s ease-in-out;
  }
`

const Logo = () => {
  const footprintImage = `/pc${useColorModeValue('-dark', '')}.png`
  return (
    <Link href={'/'}>
      <a>
        <LogoWrapper>
          <Image src={footprintImage} width={20} height={20} alt="Logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="'Kanit', sans-serif"
            fontWeight={'bold'}
            ml={3}
          >
            Ahmed Maher
          </Text>
        </LogoWrapper>
      </a>
    </Link>
  )
}

export default Logo
