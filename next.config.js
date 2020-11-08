const path = require('path')
const withImages = require('next-images')
require('dotenv').config()

module.exports = withImages({
    env: {
        API_URL: process.env.API_URL,
        MAPS_KEY: process.env.MAPS_KEY,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
})
