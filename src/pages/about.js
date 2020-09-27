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

console.log('query', query)
