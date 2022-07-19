import React from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const LogoWrapper = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-content: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return <LogoWrapper></LogoWrapper>
}

export default Logo
