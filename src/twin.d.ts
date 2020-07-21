import 'twin.macro'
import styledComponent, { css as cssProperty } from 'styled-components'

// eslint-disable-next-line
declare module 'twin.macro' {
  const css: typeof cssProperty
  const styled: typeof styledComponent
}
