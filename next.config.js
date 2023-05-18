const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            "colors.scss": path.resolve(__dirname, "./src/styles/colors.scss"),
            "mixins.scss": path.resolve(__dirname, "./src/styles/mixins.scss"),
        }
        return config
    },
}

module.exports = nextConfig
