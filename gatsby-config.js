const fs = require(`fs`)
const fetch = require(`node-fetch`)
const { buildClientSchema } = require(`graphql`)
// const { createHttpLink } = require(`apollo-link-http`)
const {
  // ApolloClient,
  // InMemoryCache,
  createHttpLink,
} = require('@apollo/client')

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

// console.log(`xxxxxxxxxx: '${JSON.stringify(process.env)}'`)

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Yu Hui`,
    author: `Yu Hui`,
    description: `个人博客! 文字、代码、记录工作和生活`,
    copyright: `&copy;2014-${new Date().getFullYear()} 粤`,
    siteUrl: `https://yushujin.com`,
    aboutUrl: `/about`,
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/mr_yuhui',
      },
      {
        name: 'github',
        url: 'https://github.com/alvinmi',
      },
      {
        name: 'weibo',
        url: 'https://weibo.com/u/5703864435?is_all=1',
      },
      {
        name: 'zhihu',
        url: 'https://www.zhihu.com/people/alvinmi',
      },
    ],
    nav: [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: '技术',
        link: '/categories/tech/',
      },
      {
        title: 'life',
        link: '/categories/life/',
      },
      {
        title: 'reding',
        link: '/categories/reading/',
      },
      {
        title: 'travel',
        link: '/categories/travel/',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-chaton`,
      options: {
        // googleAnalytics: 'UA-74424222-4',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-apollo',
    //   options: {
    //     uri: 'https://api.github.com/graphql',
    //   },
    // },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     fieldName: `github`,
    //     typeName: `GitHub`,
    //     createLink: () => {
    //       console.log('................', process.env.GITHUB_TOKEN)
    //       createHttpLink({
    //         uri: `https://api.github.com/graphql`,
    //         headers: {
    //           Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    //         },
    //         fetch,
    //       })
    //     },
    //     createSchema: async () => {
    //       const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`))
    //       console.log('----------------------', __dirname)
    //       return buildClientSchema(json.data)
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        queries: [
          `{
            viewer {
              pinnedItems(first: 5, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    id
                    name
                    url
                    description
                    homepageUrl
                  }
                }
              }
            }
          }
          `,
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-github-api`,
    //   options: {
    //     url: 'https://api.github.com/graphql',
    //     token: process.env.GITHUB_TOKEN,
    //     graphQLQuery: `
    //     query () {
    //       repository(owner: "alvinmi", name: "yuhui.dev") {
    //         sshUrl
    //         url
    //         issues(first: 100, states: OPEN, labels: null) {
    //           totalCount
    //           edges {
    //             node {
    //               title
    //               url
    //               createdAt
    //               updatedAt
    //               reactions(first: 100) {
    //                 totalCount
    //                 nodes {
    //                   content
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }`,
    //     variables: {},
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-antd",
    //   options: {
    //     style: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-plugin-static-folders',
      options: {
        folders: ['./static'],
      },
    },
  ],
}
