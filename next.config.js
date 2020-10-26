const path = require('path')
const withImages = require('next-images')
require('dotenv').config()

module.exports = withImages({
    env: {
        API_URL: process.env.API_URL,
    },
    distDir: 'build',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
})
