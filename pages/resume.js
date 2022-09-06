import dynamic from 'next/dynamic'
import { Box, Button, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import SectionAnimated from '../components/section'
const PDFViewer = dynamic(() => import('../components/resumeViewer'), {
  ssr: false
})

export default function PDF() {
  return (
    <SectionAnimated delay={0.3}>
      <Box align="center">
        <Link
          _hover={{ textDecoration: 'none' }}
          target={'_blank'}
          href="https://docs.google.com/document/d/1J6NQli5376gS-4xW3Bj1_nsJAPVe_1k7/edit?usp=sharing&ouid=105626555580654089249&rtpof=true&sd=true"
        >
          <Button my={4} rightIcon={<ChevronRightIcon />} colorScheme="purple">
            See in Full Screen
          </Button>
        </Link>
        <PDFViewer />
      </Box>
      {/* the pdf viewer component */}
    </SectionAnimated>
  )
}
