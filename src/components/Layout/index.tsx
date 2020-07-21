import React from 'react'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line no-unused-vars
import tw from 'twin.macro'

import { createGlobalStyle } from 'styled-components'
import { Theme, Navigation } from '..'
import { Container } from './styles'

interface Props {
  children: any[]
}

const GlobalStyle = createGlobalStyle``
export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Theme>
      <GlobalStyle />
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/6812898/7282412/css/fonts.css"
        />
      </Helmet>
      <Navigation />

      <Container>{children}</Container>
    </Theme>
  )
}

export default Layout
