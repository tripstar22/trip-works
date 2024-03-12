const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join('src/styles/scss/', 'styles')],
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/vlenfcbgvx7c/*/**',
      },
    ],
  },
  webpack(config) {
    const modifiedConfig = { ...config };

    modifiedConfig.resolve.fallback = {
      fs: false,
      path: false,
    };
    modifiedConfig.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return modifiedConfig;
  },
};
