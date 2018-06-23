module.exports = {
  siteMetadata: {
    title: 'EveryPeso.com',
    description: 'Learn to budget, beat debt, &amp; build a legacy'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    }
  ],
}
