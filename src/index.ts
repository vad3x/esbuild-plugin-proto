import { Plugin } from 'esbuild';
import { promises as fs } from 'fs';
import path from 'path';
import type { Options } from '@grpc/proto-loader';
import { createTSProtoFileContent } from './create-ts-proto-file-content';

export type ProtoPluginOptions = Options;

export function protoPlugin(options: ProtoPluginOptions): Plugin {
  return {
    name: 'proto',
    setup(build) {
      build.onLoad({ filter: /\.proto$/ }, async (args) => {
        const fileContent = await fs.readFile(args.path, 'utf8');

        const contents = createTSProtoFileContent(fileContent, options);

        return {
          contents,
          loader: 'ts',
          resolveDir: path.dirname(args.path),
        };
      });
    },
  };
}
