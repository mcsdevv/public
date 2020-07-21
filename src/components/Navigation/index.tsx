import React from 'react'
import {
  Header,
  NavigationComponent,
  NavigationLink,
  NavigationLinkContainer,
} from './styles'
import { Logo } from '../Icons'

export const Navigation: React.FC = () => {
  return (
    <Header>
      <NavigationComponent>
        <NavigationLinkContainer position="left">
          <NavigationLink to="/bio">Tim’s Bio</NavigationLink>
        </NavigationLinkContainer>
        <NavigationLink to="/">
          <Logo />
        </NavigationLink>
        <NavigationLinkContainer position="right" tw="relative">
          <NavigationLink to="/posts">Writing</NavigationLink>
        </NavigationLinkContainer>
      </NavigationComponent>
    </Header>
  )
}

export default Navigation
