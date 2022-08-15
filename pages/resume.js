import dynamic from 'next/dynamic'
import { Box, Button, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
const PDFViewer = dynamic(() => import('../components/resumeViewer'), {
  ssr: false
})

export default function PDF() {
  return (
    <>
      <Box align="center">
        <Link
          _hover={{ textDecoration: 'none' }}
          target={'_blank'}
          href="https://docs.google.com/document/d/e/2PACX-1vSWdn-FBCD4wUpyfZyE-p-2jOxlKIcfXFJNHhFNVMyyQSJPh2URaYf4TpQvQ2ynVv6b1Mn2p4-SQr6I/pub "
        >
          <Button my={4} rightIcon={<ChevronRightIcon />} colorScheme="purple">
            See in Full Screen
          </Button>
        </Link>
        <PDFViewer />
      </Box>
      {/* the pdf viewer component */}
    </>
  )
}
