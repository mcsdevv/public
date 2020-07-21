import { MDXProvider } from '@mdx-js/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { SEO, Layout, Prose } from '../components'

const Introduction = tw.div`text-center`
const MetaText = tw.p`text-cool-gray-600 mt-3  text-xs`

const TlDrBox = tw.aside`mx-4 my-9 relative py-3 px-6 border border-indigo-700 rounded sm:max-w-sm sm:mx-auto md:max-w-xl lg:max-w-2xl`
const TlDrTitle = tw.span`select-none cursor-pointer no-underline
    left-1/2 absolute w-24 -mt-6 -ml-12 font-sans font-bold text-center text-indigo-800 bg-white`
const TlDrText = styled.p`
   {
    ${tw`tracking-reading px-2 py-0 my-0 font-sans text-lg font-semibold text-left`}
  }
`
const TlDrTip = styled.span`
   {
    ${tw`bg-cool-gray-800 absolute z-20 w-64 px-6 py-4 mt-3 -ml-32 space-y-1 font-serif text-xs text-white rounded shadow-2xl`}
  }
`

interface Properties {
  data: any
}

interface State {
  tldr: boolean
}

export default class extends React.PureComponent<Properties, State> {
  constructor(props) {
    super(props)
    this.state = { showTlDr: false }
    this.tldrShow = this.tldrShow.bind(this)
    this.tldrHide = this.tldrHide.bind(this)
  }

  private tldrShow() {
    this.setState({ showTlDr: true })
  }

  private tldrHide() {
    this.setState({ showTlDr: false })
  }

  public render(): JSX.Element {
    const { data } = this.props
    const { state } = this
    const post = data.mdx

    const prettyDate = new Intl.DateTimeFormat(`default`, {
      year: `numeric`,
      month: `short`,
      day: `numeric`,
      timeZone: `America/Los_Angeles`,
    }).format(Date.parse(post.frontmatter.date))
    return (
      <Layout>
        <SEO title={post.frontmatter.title} />
        <Prose className="tracking-reading prose">
          <Introduction>
            <h1 tw=" mt-12 mb-6">{post.frontmatter.title}</h1>
            <MetaText>
              <>Published</>
              <time dateTime={post.frontmatter.date}> {prettyDate}</time>
              <span className="mx-1"> · </span>
              <span>a {post.timeToRead} minute read</span>
            </MetaText>
            <TlDrBox>
              <TlDrTip
                style={{
                  display: state.showTlDr ? `inline` : `none`,
                }}
              >
                TL;DR is short for
                <em tw="block my-1 font-bold text-base">
                  “Too long; didn’t read”
                </em>
                It’s how the cool kids summarize a lengthy piece of writing 😉
              </TlDrTip>
              <TlDrTitle
                onMouseEnter={this.tldrShow}
                onMouseLeave={this.tldrHide}
              >
                TL;DR
                <svg
                  className="inline-block ml-2 -mt-1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="question-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655
                    90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621
                    3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363
                    22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373
                    12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46
                     46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                  />
                </svg>
              </TlDrTitle>
              <TlDrText>{post.frontmatter.tldr}</TlDrText>
            </TlDrBox>
          </Introduction>
          <MDXProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Prose>
      </Layout>
    )
  }
}

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
