// webpack.config.js
const DeleteSourceMapsWebpackPlugin = require('sentry-delete-sourcemaps-webpack-plugin')

module.exports = {
    // ...
    plugins: [
        new DeleteSourceMapsWebpackPlugin()
    ],
    // ...
}
