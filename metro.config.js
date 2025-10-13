const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.resolver = {
    ...resolver,
    sourceExts: [...resolver.sourceExts, 'mjs'],
  };

  return config;
})();