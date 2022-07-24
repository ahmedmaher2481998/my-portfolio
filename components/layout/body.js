import React from 'react'
import Head from 'next/head'
import { GridItemStyle } from '../grid'
import { motion } from 'framer-motion'

const variantsAnimation = {
  hidden: { opacity: 0, y: 20, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: 20, x: -0 }
}
const Body = ({ children, title }) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title} | Ahmed maher</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
      )}
      <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variantsAnimation}
        transition={{
          duration: 0.5,
          type: 'easeInOut'
        }}
        style={{ position: 'relative' }}
      >
        {children}
        <GridItemStyle />
      </motion.article>
    </>
  )
}

export default Body
