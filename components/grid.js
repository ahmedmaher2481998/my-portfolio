import NextLink from 'next/link'
import Image from 'next/image'
import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const WorkGridItem = ({ children, id, title, src }) => {
  return (
    <>
      <Box w="100%" textAlign="center">
        <NextLink href={`/projects/${id}`} passHref scroll={false}>
          <LinkBox cursor={'pointer'}>
            <Image src={src} alt={title} className="grid-item-thumbnail" placeholder="blur" />
            <LinkOverlay href={`/projects/${id}`}>
              <Text fontSize={20} mt={2}>
                {title}
              </Text>
            </LinkOverlay>
            <Text fontSize={14}> {children} </Text>
          </LinkBox>
        </NextLink>
      </Box>
    </>
  )
}

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
.grid-item-thumbnail{ 
    border-radius: 12px;
}
`}
    />
  )
}
