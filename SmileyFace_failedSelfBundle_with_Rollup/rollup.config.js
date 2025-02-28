import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',  // Your entry file
    output: {
        file: 'src/bundle.js',
        format: 'iife', // Immediately Invoked Function Expression for browser
        sourcemap: true,
    },
    plugins: [
        resolve(),     // Resolves dependencies from node_modules
        commonjs(),    // Converts CommonJS modules to ES6
        babel({
            babelHelpers: 'bundled', // Use 'runtime' if you're using @babel/plugin-transform-runtime
            exclude: 'node_modules/**', 
            presets: ['@babel/preset-env', '@babel/preset-react']  // Add React if needed
        }),
        terser()       // Minify the output
    ]
};
