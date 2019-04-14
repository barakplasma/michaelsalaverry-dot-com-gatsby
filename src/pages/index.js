import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`homepage`, `blog`, `developer`]} />
    <h1>Welcome</h1>
    <p>I am not sure what I'll do with this yet.</p>
    <Link to="/blog/">Check out my Blog</Link>
  </Layout>
)

export default IndexPage
