// eslint-disable-next-line no-unused-vars
import tw, { css, styled } from 'twin.macro'

export const Container = styled.div`
  ${tw`max-w-4xl mx-8 mt-16`}
  @media (min-width: 60rem) {
    ${tw`mx-auto`}
  }
`
