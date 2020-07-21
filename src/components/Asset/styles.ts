// eslint-disable-next-line no-unused-vars
import tw, { css, styled } from 'twin.macro'
import { BlueButton, PinkLink } from '..'

export const Trigger = tw.button`
  float-none relative block w-48 p-2 border border-gray-300 rounded shadow-sm mx-auto mt-3 mb-8
  sm:my-0 sm:left-20 sm:bg-cool-gray-50 sm:float-right sm:w-48 sm:h-56`

export const Caption = styled.figcaption`
  ${tw`mt-2 mb-1 text-sm tracking-tight text-left`}
  ${tw`overflow-hidden whitespace-no-wrap`}
  font-family: 'Google Sans', sans-serif;
  text-overflow: ellipsis;
`

export const Download = styled(BlueButton)`
  font-family: 'Google Sans', sans-serif;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const DownloadCard = styled(BlueButton)`
  font-family: 'Google Sans', sans-serif;
  margin: 2rem auto 0;
  display: block;
  ${tw`text-xl`}
`

export const OpenCard = styled(PinkLink)`
  font-family: 'Google Sans', sans-serif;
  margin: 2rem auto 0;
  display: block;
`
