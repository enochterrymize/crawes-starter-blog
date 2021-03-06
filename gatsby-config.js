module.exports = {
  siteMetadata: {
    title: `<ENOCH />`,
    author: {
      name: `Hi I'm ENOCH TERRY MIZE.`,
      summary: `I am Full Stack Developer living in Germany. I create website and Mobile Apps. I love learning and doing and writing. Here I will contribute you the best practises and gained skills from 8+ years of exceptional learning, performance and quality experience in Full Stack Modern Application development.`,
      expertise:`REACT NATIVE, AWS, and GraphQL`
    },
    description: `A blog teaching How I reacted to React.`,
    siteUrl: `https://enochterrymize.com/`,
    category: `Project`,
    social: {
      twitter: `enochterrymize`,
      linkedin: `enoch-terry-mize-george-muller-37b71435`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {
              directory: `${__dirname}/content/blog/snippets`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {}
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
