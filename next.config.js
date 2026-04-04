/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // RTL Support
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
};

module.exports = withNextIntl(nextConfig);
