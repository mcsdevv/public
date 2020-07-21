const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.tsx`)
  const pageTemplate = path.resolve(`src/templates/page.tsx`)

  const genPosts = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { category: { in: ["blog"] } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            body
          }
        }
      }
    }
  `)

  const posts = genPosts.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `${post.node.fields.slug}`,
      component: postTemplate,
      context: {
        id: `${post.node.id}`,
        slug: `${post.node.fields.slug}`,
        previous,
        next,
      },
    })
  })

  const genPages = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { category: { in: ["page"] } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            body
          }
        }
      }
    }
  `)

  const pages = genPages.data.allMdx.edges

  pages.forEach((page) => {
    createPage({
      path: `${page.node.fields.slug}`,
      component: pageTemplate,
      context: {
        id: `${page.node.id}`,
        slug: `${page.node.fields.slug}`,
      },
    })
  })
}
