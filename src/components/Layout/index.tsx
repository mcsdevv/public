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
const t = tw.h1``
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
      <div tw="absolute w-full top-0 left-0 z-0 h-64">
        <span
          style={{
            background: `linear-gradient(to right, #766df4 0%, #766df4 30%, #6a9bf4 100%)`,
          }}
          tw=" block absolute w-full h-full left-0 top-0 bg-black opacity-25 z-10"
        />

        <div
          style={{ paddingBottom: `8.4%` }}
          tw="left-0 bottom-0 z-20 w-full absolute overflow-hidden bg-transparent text-white -mb-1"
        >
          <svg
            tw="max-w-full absolute top-0 bottom-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3000 250"
          >
            <path
              fill="#fff"
              d="M3000,0v250H0v-51c572.7,34.3,1125.3,34.3,1657.8,0C2190.3,164.8,2637.7,98.4,3000,0z"
            />
          </svg>
        </div>
        <div
          tw="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ zIndex: `-100`, clip: `rect(0, 309px, 667px, 0)` }}
        >
          <div
            style={{
              backgroundImage: `url('https://demo.createx.studio/around/img/demo/mobile-app/hero-bg.jpg')`,
              marginTop: `29.75px`,
              transform: `translate3d(0px, -29.75px, 0px)`,
            }}
            className=""
            tw="object-cover bg-center bg-cover object-center max-w-none fixed top-0 left-0 overflow-hidden pointer-events-none"
            data-jarallax-original-styles="background-image: url(img/demo/mobile-app/hero-bg.jpg);"
          />
        </div>
      </div>
      <Container tw="relative z-30">{children}</Container>
    </Theme>
  )
}

export default Layout
