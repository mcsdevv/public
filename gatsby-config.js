module.exports = {
  siteMetadata: {
    title: `Tim Feeley`,
    description: `People-centric Product Management`,
    author: `@timfee`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-slug`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
  ],
}
