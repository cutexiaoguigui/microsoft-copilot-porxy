import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import html from 'rollup-plugin-html';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import { wasm } from '@rollup/plugin-wasm';

// rollup.config.mjs
// ---cut-start---
/** @type {import('rollup').RollupOptions} */
// ---cut-end---
export default {
    input: 'src/workers.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'es',
        }
    ],
    plugins:[
        typescript(),
        wasm(),
        json(),
        html({
			include: '**/*.html'
		}),
        compiler({
            compilation_level:"ADVANCED"
        })
    ]
};