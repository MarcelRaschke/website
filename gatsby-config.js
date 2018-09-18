const proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "Dependabot"
  },
  developMiddleware: app => {
    app.use(
      "/api/",
      proxy({
        target: "https://api.dependabot.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api/": "/"
        }
      })
    );
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
              ignoreFileExtensions: []
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`source sans pro\:200,300,400,600,700`]
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {}
    }
  ]
};
