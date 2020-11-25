const path = require('path')

module.exports = {
  mount: {
    public: '/',
    src: '/'
  },
  exclude: ['**/node_modules/**'],
  plugins: [
    '@snowpack/plugin-react-refresh'
    // [
    //   '@snowpack/plugin-run-script', {
    //     cmd: 'npm run lint:fix',
    //     watch: 'watch "$1" src'
    //   }
    // ]
  ],
  install: [
  ],
  installOptions: {
  },
  devOptions: {
    open: 'none'
  },
  buildOptions: {
    out: 'dist',
    sourceMaps: process.env.NODE_ENV === 'development'
  },
  proxy: {
  },
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}
