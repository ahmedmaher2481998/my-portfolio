import React from 'react'
import Logo from './Logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <>
      <NextLink href={href} passHref>
        <Link
          p={2}
          bg={active ? 'grassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}
          // target={target}
          // {...props}
        >
          {children}
        </Link>
      </NextLink>
    </>
  )
}
const Navbar = props => {
  return (
    <Box
      position={'fixed'}
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      Navbar
    </Box>
  )
}

export default Navbar
