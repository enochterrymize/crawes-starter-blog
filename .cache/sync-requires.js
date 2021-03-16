const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Terry HD/workspace/projects_gatsby/ireacted/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Volumes/Terry HD/workspace/projects_gatsby/ireacted/src/pages/404.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Volumes/Terry HD/workspace/projects_gatsby/ireacted/src/pages/index.tsx"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Volumes/Terry HD/workspace/projects_gatsby/ireacted/src/templates/blog-post.js")))
}

