import React from 'react'
import { graphql } from 'gatsby'

import { Title, Introduction, Layout, PostCard } from '../components'

import { Grid } from './styles'

type Props = {
  data: any
}

export const Page: React.PureComponent<Props> = ({ data }: Props) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <Introduction>
        <Title>Posts</Title>
      </Introduction>
      <p tw="text-center mb-0">
        Content is still scarce, but here’s everything:
      </p>
      <Grid>
        {posts.map((item) => {
          return <PostCard key={item.node.id} post={item} />
        })}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query PostsQuery {
    allMdx(
      filter: {
        frontmatter: { category: { eq: "blog" }, published: { eq: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            tldr
            date
          }
        }
      }
    }
  }
`

export default Page
