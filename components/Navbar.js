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
  const { path } = props
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
      <Container
        display={'flex'}
        p={2}
        maxW={'container.md'}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align={'center'} mr={5}>
          <Heading as="h1" size={'lg'} letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={'/works'} path={path}>
            Works
          </LinkItem>
          <LinkItem href={'/resume'} path={path}>
            C.V
          </LinkItem>
          <LinkItem href={'/edu'} path={path}>
            Education
          </LinkItem>
          <LinkItem href={'/about'} path={path}>
            About
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
