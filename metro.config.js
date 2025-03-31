const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Apply NativeWind configuration
const nativeWindConfig = withNativeWind(config, { input: './global.css' });

// Custom transformer for SVG support
nativeWindConfig.transformer = {
  ...nativeWindConfig.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer")
};

// Custom resolver to handle SVGs
nativeWindConfig.resolver = {
  ...nativeWindConfig.resolver,
  assetExts: nativeWindConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...nativeWindConfig.resolver.sourceExts, "svg"]
};

// Export the final config object
module.exports = nativeWindConfig;
