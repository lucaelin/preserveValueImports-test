import esbuild from 'rollup-plugin-esbuild';

export default [{
    input: './src/index.ts',
    output: [
        {
            format: 'esm',
            dir: 'build:rollup'
        }
    ],

    plugins: [
        esbuild({ tsconfig: './tsconfig.json' }),
    ],

    watch: {
        clearScreen: false,
    },
}];
