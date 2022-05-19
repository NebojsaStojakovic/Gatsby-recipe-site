import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        person {
          name
          age
        }
        complexData {
          name
          age
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h1>Name : {data.site.siteMetadata.person.age}</h1> */}
      <h2>site title is : {title}</h2>
    </div>
  )
}

export default FetchData
