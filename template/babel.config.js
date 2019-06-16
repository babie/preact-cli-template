// eslint-disable-next-line @typescript-eslint/no-var-requires
const poiBabelConfig = require('poi/babel')

const { presets, plugins } = poiBabelConfig(null, {
  jsx: 'react',
  typescript: true
})
module.exports = {
  presets: presets,
  plugins: plugins.concat([
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          react: 'preact/compat',
          'react-dom': 'preact/compat'
        }
      }
    ]
  ]),
  env: {
    test: {
      presets: presets
    }
  }
}
