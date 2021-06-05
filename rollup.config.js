import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs     from 'rollup-plugin-commonjs'
import json         from '@rollup/plugin-json'
import polyfills from 'rollup-plugin-node-polyfills'
import inject from 'rollup-plugin-inject';
import * as path from 'path'

const extensions = ['.js', '.mjs'];

export default {

    input: './src/main.js',
    output: [
//        { file: './dist/bundle.cjs', format: 'cjs' },
        { file: './dist/bundle.js', format: 'umd', name: 'app', sourcemap: true    },
    ],

  plugins: [
    nodeResolve({
        mainFields: [ 'browser'],
        extensions
    }),
    commonjs(),
    json(),
    polyfills(),
  ]
}
