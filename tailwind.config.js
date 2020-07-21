const tailwindui = require(`@tailwindcss/ui`)
const tailwindprose = require(`@tailwindcss/typography`)

module.exports = {
  purge: [
    `./src/**/*.html`,
    `./src/**/*.scss`,
    `./src/**/*.js`,
    `./src/**/*.ts`,
    `./src/**/*.tsx`,
  ],
  plugins: [tailwindui, tailwindprose],
  theme: {
    extend: {
      margin: {
        96: `24rem`,
        128: `32rem`,
      },
      lineHeight: {
        11: `2.75rem`,
        12: `3rem`,
        13: `3.25rem`,
      },
      letterSpacing: {
        tighter: `-0.05em`,
        tight: `-0.025em`,
        reading: `-0.01em`,
        normal: `0`,
        wide: `0.025em`,
        wider: `0.05em`,
        widest: `0.1em`,
      },
      opacity: {
        '80': `.8`,
        '90': `.9`,
      },
    },
    fontFamily: {
      sans: [`Whitney SSm A`, `Whitney SSm B`, `sans-serif`],
      serif: [`Sentinel SSm A`, `Sentinel SSm B`, `serif`],
      headline: [`Leviathan A`, `Leviathan B`],
      mono: [`monospaced`],
    },
    variants: {},
  },
}
