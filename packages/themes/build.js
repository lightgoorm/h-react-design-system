// import build from "esbuild"
import esbuild from 'esbuild';
import pkg from './package.json' assert { type: 'json'}

const dev = process.argv.includes("--dev");
const minify = !dev;

const watch = process.argv.includes("--watch");

const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.devDependencies
})

const baseConfig = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify,
    sourcemap: true,
    outdir : 'dist',
    target: 'es2019',
    watch,
    external
};

Promise.all([
        esbuild.build({
            ...baseConfig,
            format: "esm",
        }),
        esbuild.build({
            ...baseConfig,
            format: "cjs",
            outExtension:{
                ".js":".cjs"
            }
        })
    ]).catch((err) => {
        console.log(err);
        process.exit(1);
    });

