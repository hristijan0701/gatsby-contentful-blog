import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
const FlexItem = styled.div`
  width: ${props=>props.width};
  @media(max-width: 920px) {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
`

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <h1>Blog List Page</h1>
    <FlexWrap>
    </FlexWrap>
  </Layout>
)

export default BlogPage
