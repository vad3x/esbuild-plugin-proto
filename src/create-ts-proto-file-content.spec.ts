import { createTSProtoFileContent } from './create-ts-proto-file-content';
import type { Options } from '@grpc/proto-loader';

describe('#createTSProtoFileContent', () => {
  test('should throw error given content is not valid proto', async () => {
    // arrange
    const protoFileContentStub = `not valid proto`;

    const optionsStub: Options = {};

    // act
    // assert
    expect(() =>
      createTSProtoFileContent(protoFileContentStub, optionsStub)
    ).toThrowErrorMatchingSnapshot();
  });

  test('should throw error given unknown syntax is passed', async () => {
    // arrange
    const protoFileContentStub = `syntax = "unknown";`;

    const optionsStub: Options = {};

    // act
    // assert
    expect(() =>
      createTSProtoFileContent(protoFileContentStub, optionsStub)
    ).toThrowErrorMatchingSnapshot();
  });

  test('should generate result given empty proto', async () => {
    // arrange
    const protoFileContentStub = ``;

    const optionsStub: Options = {};

    // act
    const result = createTSProtoFileContent(protoFileContentStub, optionsStub);

    // assert
    expect(result).toMatchSnapshot();
  });

  test('should generate result given valid proto passed with options', async () => {
    // arrange
    const protoFileContentStub = `
      syntax = "proto3";

      message Test0Response {
        Test0Details details = 1;
      }

      message Test0Details {
        int32 id = 1;
        string field0 = 2;
      }
    `;

    const optionsStub: Options = {
      arrays: true,
    };

    // act
    const result = createTSProtoFileContent(protoFileContentStub, optionsStub);

    // assert
    expect(result).toMatchSnapshot();
  });

  test('should generate result given no options passed', async () => {
    // arrange
    const protoFileContentStub = `
      syntax = "proto3";

      message Test0Response {
        Test0Details details = 1;
      }

      message Test0Details {
        int32 id = 1;
        string field0 = 2;
      }
    `;

    // act
    const result = createTSProtoFileContent(protoFileContentStub);

    // assert
    expect(result).toMatchSnapshot();
  });
});
