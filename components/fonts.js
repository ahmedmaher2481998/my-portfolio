import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => {
  return (
    <Global
      styles={`@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,500;0,700;1,100&family=M+PLUS+Rounded+1c:wght@300&family=Source+Code+Pro&display=swap')`}
    />
  )
}

export default Fonts
