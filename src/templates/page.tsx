import { MDXProvider } from '@mdx-js/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

// eslint-disable-next-line no-unused-vars
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

import { SEO, Layout, Prose } from '../components'

export const Title = tw.h1`font-sans text-4xl font-bold tracking-tight leading-10`

const Introduction = tw.div`text-center`

interface Properties {
  data: any
}

export const Page: React.FC<Properties> = ({ data }: Properties) => {
  const page = data.mdx

  return (
    <Layout>
      <SEO title={page.frontmatter.title} />
      <Prose className="prose">
        <Introduction>
          <Title>{page.frontmatter.title}</Title>
        </Introduction>
        <MDXProvider>
          <MDXRenderer>{page.body}</MDXRenderer>
        </MDXProvider>
      </Prose>
    </Layout>
  )
}
export default Page

/**
 * Query for data for the page. Note that $id is injected in via context from
 * actions.createPage. See gatsby-node.js for more info.
 */
export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        date
        tldr
      }
      timeToRead
    }
  }
`
