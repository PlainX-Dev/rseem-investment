import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export const config = {
  matcher: [
    '/',
    '/(en|ar)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
