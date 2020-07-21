import React from 'react'
import { ThemeProvider } from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

export { Prose, Highlight } from './styles'

const { theme } = resolveConfig(tailwindConfig)

// eslint-disable-next-line react/jsx-props-no-spreading
export const Theme = (props: any) => <ThemeProvider {...props} theme={theme} />

export default Theme
