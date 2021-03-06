// eslint-disable-next-line no-unused-vars
import tw, { css, styled } from 'twin.macro'

export const Introduction = tw.div`text-center`

export const Title = tw.h1`font-sans text-4xl font-bold tracking-tight leading-10`

export const Highlight = styled.span`
  ${tw`tracking-reading font-semibold align-baseline`}
  background: linear-gradient(90deg, #ffe9ba 50%, #fbe0c2 50%, #ffe9ba 100%);
  box-decoration-break: clone;
  border-radius: 0.15rem;
  letter-spacing: -0.025em;
  padding: 0.125rem 0.25rem 0.12rem;
`

// { BasicButton, BasicLink, BlueButton, PinkLink, IndigoButton, PinkButton }
export const BasicButton = tw.button`
  px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded
  transition ease-in-out duration-300  focus:outline-none
`

export const BasicLink = tw.a`
  px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded
  transition ease-in-out duration-300  focus:outline-none block
`

export const BlueButton = styled(BasicButton)`
  ${tw`hover:bg-blue-500 active:border-blue-700 focus:border-blue-700 focus:shadow-outline-blue text-white bg-blue-600`}
`

export const PinkButton = styled(BasicButton)`
  ${tw`hover:bg-pink-500 active:border-pink-700 focus:border-pink-700 focus:shadow-outline-pink text-white bg-pink-600`}
`

export const PinkLink = styled(BasicLink)`
  ${tw`hover:bg-pink-500 active:border-pink-700 focus:border-pink-700 focus:shadow-outline-pink text-white bg-pink-600`}
`

export const IndigoButton = styled(BasicButton)`
  ${tw`hover:bg-indigo-500 active:border-indigo-700 focus:border-indigo-700 focus:shadow-outline-indigo text-white bg-indigo-600`}
`

export const Prose = styled.article`
  ${tw`tracking-reading mx-auto font-serif text-gray-800`}
  max-width: 70ch;

  @media (min-width: 70rem) {
    max-width: 95ch;
  }

  blockquote {
    & {
      ${tw`border-l-4 border-indigo-800 rounded-sm shadow-sm`}
      ${tw`w-10/12 px-4 py-0 m-4 font-sans text-lg font-semibold tracking-tight`}

      font-style: inherit;
      border-top: 1px solid #f1f5f9;
      border-right: 1px solid #f1f5f9;
      border-bottom: 1px solid #f1f5f9;

      p + p {
        ${tw`mt-6`}
      }
    }
  }
  blockquote p:first-of-type::before,
  blockquote p:last-of-type::after {
    content: '';
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-sans font-bold tracking-tight`}
  }

  ul {
    ${tw`pl-6 text-left list-none`}
  }

  ul > li::before {
    ${tw`absolute block w-5 h-5 text-xs leading-5 text-center text-indigo-800`}
    content: url("data:image/svg+xml,%3Csvg class='svg-inline--fa fa-chevron-circle-right fa-w-16' aria-hidden='true' focusable='false' data-prefix='fad' data-icon='chevron-circle-right' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' data-fa-i2svg=''%3E%3Cg class='fa-group'%3E%3Cpath class='fa-secondary' fill='%236658ea' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm113.9 265L234.4 408.5a23.9 23.9 0 0 1-33.9 0l-17-17a23.9 23.9 0 0 1 0-33.9L285.1 256 183.5 154.4a23.9 23.9 0 0 1 0-33.9l17-17a23.9 23.9 0 0 1 33.9 0L369.9 239a24 24 0 0 1 0 34z'%3E%3C/path%3E%3Cpath class='fa-primary' fill='%23ffffff' d='M369.9 273L234.4 408.5a23.9 23.9 0 0 1-33.9 0l-17-17a23.9 23.9 0 0 1 0-33.9L285.1 256 183.5 154.4a23.9 23.9 0 0 1 0-33.9l17-17a23.9 23.9 0 0 1 33.9 0L369.9 239a24 24 0 0 1 0 34z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");

    top: 0.1rem;
    left: -0.3rem;
  }

  li > strong:first-of-type {
    ${tw`font-sans font-semibold text-indigo-800`}
  }
`
