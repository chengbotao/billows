/*
 * @Author: Chengbotao
 * @Date: 2022-06-05 18:00:17
 */
import { resolve } from 'path';
import pkg from './package.json';

import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

const { version } = pkg;
const outputConf = {
    banner: `/* Billows version ${version} */`,
    footer: `/* Follow me on GitHub! @chengbotao */`,
};

export default {
    input: 'packages/index.ts',
    output: [
        {
            file: resolve(__dirname, 'dist', 'billows.esm.js'),
            format: 'esm',
            ...outputConf,
        },
        {
            file: resolve(__dirname, 'dist', 'billows.js'),
            format: 'umd',
            name: 'billows',
            ...outputConf,
        },
    ],
    plugins: [
        alias({
            entries: {
                packages: resolve(__dirname, 'packages'),
            },
        }),
        nodeResolve({
            extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
        }),
        commonjs(),
        eslint({
            // fix: true,
            include: ['packages/**/*.ts'],
            exclude: ['node_modules/**', 'dist', 'test'],
        }),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', 'tsx'],
        }),
        typescript(),
        json(),
    ],
};
