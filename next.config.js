const path = require('path');

const globImporter = require('node-sass-glob-importer');

const withPlugins = require('next-compose-plugins');


const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'components', 'styles')],
    importer: globImporter(),
  }
};


module.exports = nextConfig;
