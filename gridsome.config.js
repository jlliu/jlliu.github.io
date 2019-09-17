// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
};

module.exports = {
chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    
    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	},

  // siteName: 'Jackie Liu',
  // siteURL: 'https://jackieis.online',

  siteUrl: 'https://jackieis.online',
  // pathPrefix: '/gridsome-site',

  icon: './src/favicon.png',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 't9p4c9x03bar', // required
        accessToken: '13f8aeca80c777b1e2991e2cfe37175daba1fd946552e12e57bb93097c221bc4', // required
	      host: 'cdn.contentful.com',
        environment: 'master',
        typename: 'Contentful',
        routes: {
          'portfolioPage': '/projects/:slug'
        }
      }
    },


  ]




}
