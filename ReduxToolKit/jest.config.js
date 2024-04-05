module.exports = {
    testURL: "https://localhost/",
    rootDir: ".",
    collectCoverageFrom: [
        "**/*.{ts,tsx}",
		"!**/index.ts",
		"!index.ts",
		"!index-dev.ts",
		"!setupTests.ts",
		"!**/*.api.ts",
		"!**/*.{js,jsx}",
		"!**/*.d.{js,jsx}",
		"!*.{js,jsx}",
		"!**/*.test.{js,jsx}",
		"!**/node_modules/**",
		"!**/bower_components/**",
		"!**/node_modules/**",
		"!**/cache/**",
		"!**/scripts/**",
		"!*.d.ts",
		"!**/*.d.ts",
		"!**/dist/**",
		"!**/iframeResizer.contentWindow.min.js",
    ],
    coverageThreshold: {
        global: {
            lines: 80,
        },
    },
    cacheDirectory: "jest/cache",
    testPathIgnorePatterns: ["/node_modules/", "/cache/", "/scripts/"],
    transform: {
        "^.+\\.svg$": "./svgTransform.js"
    },
    testMatch: ["**/*.test.ts?(x)"],
    testRegex: undefined,
    collectCoverage: true,
    setupFilesAfterEnv: ["./Scripts/setupTests.js"],
};