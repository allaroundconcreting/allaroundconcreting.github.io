let options = {
  basePath: '/',
  themeTemplate: require.resolve(`./src/templates/theme`)
}

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  // Create theme page
  createPage({
    path: themeOptions.basePath || options.basePath,
    component: options.themeTemplate,
  })
}