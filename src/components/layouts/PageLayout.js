import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery } from "gatsby"

import Header from '../common/Header'
import Footer from '../common/Footer'

const PageLayout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query PageTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PageLayout