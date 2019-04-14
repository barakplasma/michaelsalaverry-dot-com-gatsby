import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Blog</h1>
    <h2>Welcome to my Blog</h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
