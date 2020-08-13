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
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: 'https://api.github.com/graphql',
        token: process.env.TOKEN,
        // token: '866c1e0a5bd23b80df665b14329447b0b810096b',
        graphQLQuery: `
        query ($author: String = "", $userFirst: Int = 0, $searchFirst: Int = 0, $q: String = "") {
          user(login: $author) {
            repositories(first: $userFirst, orderBy: {field: STARGAZERS, direction: DESC}) {
              edges {
                node {
                  name
                  description
                  url
                  stargazers {
                    totalCount
                  }
                  readme: object(expression:"master:README.md"){
                    ... on Blob{
                      text
                    }
                  }
                }
              }
            }
          }
          search(query: $q, type: ISSUE, first: $searchFirst) {
            edges {
              node {
                ... on PullRequest {
                  title
                  merged
                  url
                  state
                  repository {
                    stargazers {
                      totalCount
                    }
                    repoUrl: url
                    name
                  }
                }
              }
            }
          }
        }`,
        variables: {
          userFirst: 3,
          searchFirst: 2,
          q: 'author:ldd is:merged state:closed type:pr sort:comments',
          author: 'ldd',
        },
      },
    },
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
