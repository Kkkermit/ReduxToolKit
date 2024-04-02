module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    chrome: "116",
                },
            },
        ],
        "@babel/presets-typescript",
        "@babel/preset-react",
    ],
    plugins: [
        "@babel/proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-optional-chaining",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-nullish-coalescing-operator",
    ],
};