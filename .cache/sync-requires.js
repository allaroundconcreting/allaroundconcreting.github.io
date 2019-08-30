const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/manfredneustifter/GITHUB/allaroundconcreting/allaroundconcreting.github.io/src/pages/index.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/manfredneustifter/GITHUB/allaroundconcreting/allaroundconcreting.github.io/src/pages/404.js")))
}

