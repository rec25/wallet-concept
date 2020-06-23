module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          "containers": "./app/containers",
          "components": "./app/components",
          "screens": "./app/screens",
          "helpers": "./app/helpers",
          "assets": "./app/assets",
        }
      }]
    ]
  };
};
