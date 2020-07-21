// eslint-disable-next-line no-unused-vars
import tw, { css, styled } from 'twin.macro'
import { Link } from 'gatsby'

const CardBase = styled(Link)`
  ${tw`flex flex-col flex-1 p-6 overflow-hidden transition-all duration-200 transform rounded-lg shadow-xs`}
`
export const Card = styled(CardBase)`
  @media (max-width: 768px) {
    & + & {
      ${tw`my-8`}
    }
  }

  &:hover {
    & {
      ${tw`hover:-translate-y-2 shadow-md`}
    }
    h2 {
      ${tw`text-indigo-700 underline`}
    }
  }
`

export const CardTitle = tw.h2`text-xl font-sans font-semibold leading-6 tracking-tight`
export const CardMetaData = tw.div`mt-2 text-xs text-cool-gray-500`
export const Dot = tw.span`mx-1`
export const CardExcerpt = tw.p`mt-1 font-serif font-serif text-sm leading-5 text-cool-gray-700 tracking-reading mt-3`
