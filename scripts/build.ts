#!/usr/bin/env ts-node

import { build, Format } from 'esbuild';

const formats: Format[] = ['cjs', 'esm'];

Promise.all(
  formats.map((format) =>
    build({
      bundle: true,
      entryPoints: ['src/index.ts'],
      external: ['protobufjs'],
      format,
      outfile: format === 'cjs' ? 'lib/index.js' : 'lib/index.mjs',
      platform: 'node',
      target: ['node12', 'node14'],
    })
  )
).catch(() => {
  process.exit(1);
});
