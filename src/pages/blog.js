import React from 'react'
import { Link } from 'gatsby'

// import Layout from '../components/layout/layout'
import Layout from 'gatsby-theme-chaton/src/components/layout'
import SEO from 'gatsby-theme-chaton/src/components/seo'

// import SEO from '../components/seo'
import BlogPage from '../components/blogPage/blogPage'

const IndexPage = () => (
  // <Layout>
  <div>
    <SEO
      title="Blog - I write about my Projects."
      description="I write about my Projects, Life experience, daily hacks - I do in my Projects & Nomad Life."
    />
    <div className="blog-page">
      <BlogPage showAll />
    </div>
  </div>
  // </Layout>
)

export default IndexPage
