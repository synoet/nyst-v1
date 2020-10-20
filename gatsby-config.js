/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetaData: {
    title: 'Teo Nys',
    description: 'Teo Nys Personal Website',
    author: '@nysteo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1137',
        contentTypes: [
          'Experience'
        ],
        queryLimit: 1000,
      }
    },
    'gatsby-plugin-offline',
  ],
}
