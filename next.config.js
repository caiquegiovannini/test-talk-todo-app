const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.alias = {
          ...config.resolve.alias,
          "colors.scss": path.resolve(__dirname, "./src/styles/colors.scss"),
        }
        return config
      }
}

module.exports = nextConfig
