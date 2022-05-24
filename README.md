# `esbuild-plugin-proto`

This is a [esbuild](https://github.com/evanw/esbuild) plugin that allows to import `proto` files.

## Requirements

This packages requires at least the following for `esbuild`:

```
>=0.8.26
```

## Usage

To install this package:

```sh
npm install --save esbuild-plugin-proto esbuild @grpc/proto-loader
```

```sh
yarn add esbuild-plugin-proto esbuild @grpc/proto-loader
```

Then, use the plugin like so:

```ts
import { build } from 'esbuild';
import { protoPlugin } from 'esbuild-plugin-proto';

build({
  ...otherOptions,
  plugins: [protoPlugin()],
}).catch(() => {
  process.exit(1);
});
```

With this in place, you should now be able to import protofile like so:

```ts
import packageDefinition from './file.proto';

// Do whatever with the PackageDefinition...
```
