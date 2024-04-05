module.exports = {
    presets: [
        [
            '@babel/preset-env', 
            {
                targets: {
                    node: 'current',
                    chrome: '116',
                },
            },
        ],
        '@babel/preset-typescript',
        "@babel/preset-react"
    ],
};