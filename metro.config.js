const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
    const {
        resolver: { sourceExts }
    } = await getDefaultConfig(undefined);
    return {
        transformer: {
            babelTransformerPath: require.resolve("react-native-sass-transformer")
        },
        resolver: {
            sourceExts: [...sourceExts, "scss", "sass"]
        }
    };
})();