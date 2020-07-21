import React from 'react'
import { Link } from 'gatsby'

// eslint-disable-next-line no-unused-vars
import tw, { css, styled } from 'twin.macro'
import { Highlight } from '..'
import { Container, H1, P, Lede } from './styles'

const Hero: React.FC = () => {
  let sass = []
  const today = new Date()
  const weekday = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ][today.getDay()]
  let timeofday = today.getHours() < 11 ? `morning` : `afternoon`
  if (today.getHours() > 17) {
    timeofday = `evening`
  }

  if (today.getHours() < 4 || today.getHours() > 21) {
    timeofday = `night`
  }

  switch (today.getDay()) {
    case 0:
    case 6:
      // weekend
      sass = [`Happy ${weekday},`, `weekend warrior!`]
      break
    case 5:
      sass = [`Hey hey, it’s Friday!`]
      break
    default:
      if (timeofday === `morning`) {
        sass = [`Top of the morning!`]
      } else if (timeofday === `evening`) {
        sass = [`Good evening!`]
      } else {
        sass = [`Happy`, `${weekday}, friend!`]
      }

      break
  }

  if (timeofday === `night`) {
    sass = [`Good evening, night owl 👀`]
  }

  const Illustration = tw.img`block w-48 mx-auto`

  return (
    <Container className="prose">
      <Illustration alt="Tim Feeley" src="/images/tim_feeley-illustrated.png" />
      <H1>{sass.map((item) => [<span key={item}>{item}</span>, ` `])}</H1>
      <Lede tw="text-black">
        {[
          `I’m `,
          <Link key="tfbio" to="/bio" tw="font-sans underline font-bold">
            Tim Feeley
          </Link>,
          `, and for the past decade, I’ve led Product teams to ship usable, useful products at global scale.`,
        ]}
      </Lede>
      <P tw="text-base">
        With experience that range from Boston-area startups to Silicon Valley
        staples like Tripadvisor, Facebook and Google, I’ve been fortunate to
        have worked alongside the best in the business, learning something new
        each and every day.
      </P>
      <P tw="text-sm">
        I’ll do my best to share some of the more interesting lessons on this
        blog.
      </P>
      <P tw="text-xs">
        Nobody has it all figured out, but together,{` `}
        <Highlight>we can make better mistakes tomorrow.</Highlight>
      </P>
    </Container>
  )
}

export default Hero
