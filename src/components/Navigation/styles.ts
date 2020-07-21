import { Link } from 'gatsby'
// eslint-disable-next-line no-unused-vars
import tw, { css, styled } from 'twin.macro'

export const Header = styled.div`
  ${tw`bg-indigo-800`}
`

export const NavigationComponent = styled.nav`
  ${tw`py-2 bg-indigo-800`}
  ${tw`flex justify-around flex-grow`}
  ${tw`sm:justify-center max-w-2xl`}
  @media(min-width: 32rem){
    ${tw`mx-auto`}
  }
  ${tw`transition-all duration-300 ease-linear`}
`

export const NavigationLink = styled(Link)`
  ${tw`flex items-center text-sm font-semibold`}
  ${tw`px-4 py-2 text-gray-200 rounded-md`}
  ${tw`hover:text-white hover:bg-purple-700`}
  ${tw`focus:text-white focus:bg-purple-700`}
  ${tw`active:bg-purple-900`}
`

export const NavigationLinkContainer = styled.div(
  ({ position }: { string }) => [
    css`
      flex-basis: 100px;
    `,
    tw`flex flex-grow transition-all duration-300 ease-linear`,
    position === `left` ? tw`justify-start` : tw`justify-end`,
  ],
)
