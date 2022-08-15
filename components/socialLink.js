import { Button, Link, ListItem } from '@chakra-ui/react'
const SocialLink = ({ href, icon, children }) => {
  return (
    <ListItem>
      <Link href={href} target="_blank">
        <Button variant={'ghost'} colorScheme="teal" leftIcon={icon}>
          {children}
        </Button>
      </Link>
    </ListItem>
  )
}

export default SocialLink
