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

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FlexWrap>
      <FlexItem  width="55%">
        <StaticImage
          src="../images/gatsby-contentful.png"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </FlexItem>
      <FlexItem width="40%">
        <h2>Gatsby Contentful Blog</h2>
        <ul>
          <li>Gatsby/React</li>
          <li>Blog content management using Contentful CMS></li>
          <li>Deploy to Gatsby Cloud with github repo</li>
        </ul>
      </FlexItem>
    </FlexWrap>
  </Layout>
)

export default IndexPage
