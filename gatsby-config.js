module.exports = {
  siteMetadata: {
    title: 'Edgar Mueller',
    author: 'Edgar Mueller',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
