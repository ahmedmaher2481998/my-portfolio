import NextLink from 'next/link'
import Image from 'next/image'
import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, src }) => {
  return (
    <>
      <Box w="100% " textAlign={'center'}>
        <LinkBox cursor={'pointer'}>
          <Image
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
            src={src}
          />
          <LinkOverlay href={href} target="_blank">
            <Text mt={2}>{title}</Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </Box>
    </>
  )
}
export const WorkGridItem = ({ children, id, title, src }) => {
  return (
    <Box w="100%" textAlign={'center'}>
      <NextLink href={`/works/${id}`} passHref scroll={false}>
        <LinkBox cursor={'pointer'}>
          <Image
            src={src}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay ref={`/works/${id}`}>
            <Text fontSize={20} mt={2}>
              {title}
            </Text>
            <Text mt={2} fontSize={14}>
              {children}
            </Text>
          </LinkOverlay>
        </LinkBox>
      </NextLink>
    </Box>
  )
}
export const GridItemStyle = () => {
  ;<Global
    styles={`
.grid-item-thumbnail{ 
      border-radius: 20px;
}
`}
  />
}
