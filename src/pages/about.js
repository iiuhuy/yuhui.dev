import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../gatsby-theme-chaton/components/layout'
// console.log('graphql', graphql)

export default class extends PureComponent {
  render() {
    return (
      <div>
        <iframe
          title="comment"
          style={{
            border: 0,
            height: '100vh',
            width: '96vw',
            margin: '0 auto',
            display: 'block',
          }}
          src="https://codepen.io/ScavengerFrontend/full/GRZzdza"
          // src="https://www.bilibili.com"
        />
      </div>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

console.log('query--------------------', query)

// ================================================================================== //

// import React from 'react'
// import { graphql } from 'gatsby'

// const Index = ({ data }) => (
//   <div>
//     <h1>My repositories {{ data }}</h1>
//     <div>
//       {/* {data.github.viewer.repositories.nodes.map((repository, i) => (
//         <div key={i}>
//           <h2>{repository.name}</h2>
//         </div>
//       ))} */}
//     </div>
//   </div>
// )

// export default Index

// export const query = graphql`
//   query RepositoriesQuery {
//     github {
//       repository(name: "yuhui.dev", owner: "alvinmi") {
//         name
//       }
//     }
//   }
// `
