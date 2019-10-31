import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
// import CarImage from "../components/CarImage";
import Layout from "../components/layout"
import SEO from "../components/seo"

const CarImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "car" }) {
        cloudinary: childCloudinaryAsset {
          fluid(maxWidth: 1920) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)

  return <Image fluid={data.image.cloudinary.fluid} alt="car image" />
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <CarImage />
    </div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
  </Layout>
)

export default IndexPage
