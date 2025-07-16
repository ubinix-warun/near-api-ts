import { defineConfig } from 'orval';

export default defineConfig({
    nearApi: {
        input: {
            // target: './nearcore-repo/chain/jsonrpc/openapi/openapi.json',
            // target: 'https://raw.githubusercontent.com/near/nearcore/master/chain/jsonrpc/openapi/openapi.json',
            target: 'https://raw.githubusercontent.com/ubinix-warun/nearcore/refs/heads/master/chain/jsonrpc/openapi/openapi.json'
        },
        output: {
            mode: 'split',
            target: 'packages/jsonrpc-client/src/api/generated',
            schemas: 'packages/jsonrpc-types/src/api/generated/model',
            namingConvention: 'camelCase',
            client: 'react-query',
            httpClient: 'axios',
            override: {
                mutator: {
                    path: 'packages/jsonrpc-client/src/client.ts',
                    name: 'customInstance',
                },
            },
        },
        hooks: {
            afterAllFilesWrite: 'prettier --write',
        },
    },

    nearApiZod: {
        input: {
            target: 'https://raw.githubusercontent.com/near/nearcore/master/chain/jsonrpc/openapi/openapi.json',
        },
        output: {
            mode: 'split',
            target: 'packages/jsonrpc-types/src/api/generated',
            // schemas: 'packages/client/src/api/generated/model',
            fileExtension: '.zod.ts',
            client: 'zod',

            // ERROR 359 -- { V2: [object Object] };export
            // httpClient: 'axios',
            // override: {
            //     mutator: {
            //         path: 'packages/client/src/api/client.ts',
            //         name: 'customInstance',
            //     },
            // },

        }
    },
});