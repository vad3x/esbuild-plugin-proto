import { build, BuildResult } from 'esbuild';
import { promises as fs } from 'fs';
import path from 'path';

import { protoPlugin, ProtoPluginOptions } from '../src';

describe('test', () => {
  it('should generate result given empty proto file', async () => {
    await runTestCase('empty-proto');
  });

  it('should generate result given message proto file', async () => {
    await runTestCase('message-proto');
  });

  it('should generate result given multiple message proto files', async () => {
    await runTestCase('multi-protos');
  });

  it('should generate result given proto files with import', async () => {
    await runTestCase('import-proto');
  });
});

async function runTestCase(caseName: string) {
  const outFilename = path.resolve(
    __dirname,
    `../temp/${caseName}/${new Date().toISOString()}.js`
  );

  const buldResult = await runBuild(
    path.resolve(__dirname, `./cases/${caseName}/index.js`),
    outFilename,
    {}
  );

  expect(buldResult).toBeDefined();
  expect(await fs.readFile(outFilename, 'utf8')).toMatchSnapshot();
}

function runBuild(
  entryPoint: string,
  outfile: string,
  options: ProtoPluginOptions
): Promise<BuildResult> {
  return build({
    entryPoints: [entryPoint],
    bundle: true,
    platform: 'node',
    external: ['@grpc/proto-loader'],
    outfile,
    plugins: [protoPlugin(options)],
  });
}
