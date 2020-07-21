// eslint-disable-next-line no-unused-vars
import tw, { css, styled } from 'twin.macro'

export const MetaText = tw.p`text-cool-gray-600 mt-3  text-xs`

export const TlDrBox = tw.aside`mx-4 my-9 relative py-3 px-6 border border-indigo-700 rounded
    sm:max-w-sm sm:mx-auto md:max-w-xl lg:max-w-2xl`

export const TlDrTitle = tw.span`select-none cursor-pointer no-underline
    left-1/2 absolute w-24 -mt-6 -ml-12 font-sans font-bold text-center text-indigo-800 bg-white`

export const TlDrText = tw.p`tracking-reading px-2 py-0 my-0 font-sans text-lg font-semibold text-left`

export const TlDrTip = tw.span`bg-cool-gray-800 absolute z-20 w-64 px-6 py-4 mt-3 -ml-32
    space-y-1 font-serif text-xs text-white rounded shadow-2xl`
