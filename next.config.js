const path = require('path')
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const { config } = require('./config/env')

const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    SERVER_API_URL: config.SERVER_API_URL || 'http://localhost:4000/api',
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
  // webpack: (config, options) => {
  //   return config
  // }
}

module.exports = withPlugins([
  withCss,
  withLess,
  [withTM(withImages({}))],
  nextConfig
])