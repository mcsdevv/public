// eslint-disable-next-line no-unused-vars
import tw, { css, styled } from 'twin.macro'

export const Prose = styled.article`
  ${tw`mx-auto font-serif text-gray-800`}
  max-width: 70ch;

  @media (min-width: 70rem) {
    max-width: 95ch;
  }

  blockquote {
    & {
      ${tw`border-l-4 border-indigo-800 rounded-sm shadow-sm`}
      ${tw`w-10/12 px-4 py-0 m-4 font-sans text-lg tracking-tight`}

      border-top: 1px solid #f1f5f9;
      border-right: 1px solid #f1f5f9;
      border-bottom: 1px solid #f1f5f9;

      p + p {
        ${tw`mt-6`}
      }
    }
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
