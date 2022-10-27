module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            '@atoms': './src/components/atoms',
            '@layouts': './src/components/layouts',
            '@molecules': './src/components/molecules',
            '@organisms': './src/components/organisms',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  };
};
