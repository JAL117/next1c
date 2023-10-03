/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos', // Puedes cambiar esta ruta según tus necesidades
            outputPath: 'static/videos', // Puedes cambiar esta ruta según tus necesidades
            name: '[name].[ext]',
          },
        },
      });
      return config;
    },
  };
  