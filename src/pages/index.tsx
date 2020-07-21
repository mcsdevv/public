import React from 'react'
// eslint-disable-next-line no-unused-vars
import styled, { css, tw } from 'twin.macro'

import { SEO, Hero, Layout } from '../components'

function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
