import React from 'react'
import { Link } from 'gatsby'

// eslint-disable-next-line no-unused-vars
import { SEO, Layout, Prose, Highlight } from '..'
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
        sass = [`Good`, `${weekday} eve, friend!`]
      } else {
        sass = [`Happy`, `${weekday}, friend!`]
      }

      break
  }

  if (timeofday === `night`) {
    sass = [`Good evening, you night owl 👀`]
  }

  return (
    <Container className="prose">
      <img
        alt="It’s Tim Feeley!"
        className="block w-48 mx-auto"
        src="/images/tim_feeley-illustrated.png"
      />
      <H1>{sass.map((item) => [<span key={item}>{item}</span>, ` `])}</H1>
      <Lede>
        {[
          `I’m `,
          <Link key="tfbio" to="/bio" className="link callout">
            Tim Feeley
          </Link>,
          `, and I’m a people centric Product Manager.`,
        ]}
      </Lede>
      <P>
        I’ve spent the past decade at companies like Google, Facebook and
        Tripadvisor building useful, usable software at global scale, because I
        believe that technology can help humans achieve amazing things. Every
        day, I find myself learning something new. I’ll try to share some
        highlights here.
      </P>
      <P>
        Nobody has it all figured out, but together,{` `}
        <Highlight>we can make better mistakes tomorrow.</Highlight>
      </P>
    </Container>
  )
}

export default Hero
