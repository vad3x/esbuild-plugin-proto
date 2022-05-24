import protobuf from 'protobufjs';
import type { Options } from '@grpc/proto-loader';

export function createTSProtoFileContent(
  protoFileContent: string,
  options: Options
): string {
  const parsed = protobuf.parse(protoFileContent);

  return [
    `import { fromJSON } from '@grpc/proto-loader';`,
    `export default fromJSON(${JSON.stringify(
      parsed.root.toJSON(),
      undefined,
      2
    )}, ${JSON.stringify(options, undefined, 2)});`,
  ].join('\n');
}
