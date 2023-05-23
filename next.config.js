/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|node)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static',
            name: '[name].[hash].[ext]',
            publicPath: '/_next/static',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
