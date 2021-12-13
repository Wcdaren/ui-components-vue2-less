const useLessLoader = require('storybook-less-loader')
const path = require('path')

module.exports = {
  stories: [
    // '../stories/**/*.stories.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/components/**/*.stories.mdx',
    '../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/vue',
  // https://www.npmjs.com/package/storybook-less-loader
  webpackFinal: async (config, { configType }) => {
    // 别名
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../packages'),
    }
    config.resolve.extensions.push('.vue', '.jsx')
    // less
    const includeLessConfig = useLessLoader(config)
    return includeLessConfig
  },
}
