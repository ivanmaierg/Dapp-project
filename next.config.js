const { i18n } = require('./next-i18next.config');

module.exports = {
    images: {
        domains: ['portal.web3games.org'],
    },
    eslint: {
        dirs: ['src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    i18n,
}
