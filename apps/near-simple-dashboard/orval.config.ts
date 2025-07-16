import { defineConfig } from 'orval';

export default defineConfig({
  nearApi: {
    input: {
      target: 'https://raw.githubusercontent.com/near/nearcore/master/chain/jsonrpc/openapi/openapi.json',
    },
    output: {
      mode: 'split',
      target: 'src/api/generated',
      schemas: 'src/api/generated/model',
      client: 'react-query',
      httpClient: 'axios',
      override: {
        mutator: {
          path: 'src/api/client.ts',
          name: 'customInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});