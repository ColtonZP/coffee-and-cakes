const path = require('path')
require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL,
    },
    distDir: 'build',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
