const replace = require("rollup-plugin-replace");
const sourcemaps = require("rollup-plugin-sourcemaps");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const { globals, external } = require("./rollup.helper");
const { INPUTS, OUTPUTS, DIRS } = require("../constants");

export default {
    input: INPUTS.js,
    external,
    output: {
        file: OUTPUTS.bundle,
        format: "iife",
        sourcemap: true,
        globals,
    },
    watch: {
        clearScreen: false,
        chokidar: true,
        include: `${DIRS.tmp}/**`,
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        resolve({ jsnext: true }),
        commonjs(),
        sourcemaps(),
    ],
};
