/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.ruscarestudent.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds',
          outputPath: 'static/sounds',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });
    return config;
  },
};

export default nextConfig;
