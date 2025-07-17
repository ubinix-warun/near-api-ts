import { defineConfig } from 'orval';

console.log('orval.config.ts: Starting configuration for orval...');

const OPENAPI_TARGETS: Record<string, string> = {
    local: './nearcore-repo/chain/jsonrpc/openapi/openapi.json',
    main: 'https://raw.githubusercontent.com/near/nearcore/master/chain/jsonrpc/openapi/openapi.json',
    dev: 'https://raw.githubusercontent.com/ubinix-warun/nearcore/refs/heads/master/chain/jsonrpc/openapi/openapi.json',
};

const OPENAPI_OUTPUT_CLIENT_PATH = 'packages/jsonrpc-client';
const OPENAPI_OUTPUT_TYPE_PATH = 'packages/jsonrpc-types';
const OPENAPI_BASE_API_GENERATED_PATH = '/api/generated';
// const OPENAPI_BASE_API_GENERATED_PATH = '/api/generated2';

console.log('orval.config.ts:', OPENAPI_TARGETS[process.env.OPENAPI_ENV || 'dev']);

export default defineConfig({
    nearApi: {
        input: {
            target: OPENAPI_TARGETS[process.env.OPENAPI_ENV || 'dev']
        },
        output: {
            mode: 'split',
            target: OPENAPI_OUTPUT_CLIENT_PATH + '/src' + OPENAPI_BASE_API_GENERATED_PATH,
            schemas: OPENAPI_OUTPUT_TYPE_PATH + '/src' + OPENAPI_BASE_API_GENERATED_PATH + '/model',
            namingConvention: 'camelCase',
            client: 'react-query',
            httpClient: 'axios',
            override: {
                mutator: {
                    path: OPENAPI_OUTPUT_CLIENT_PATH + '/src/client.ts',
                    name: 'customInstance',
                },

                // TS2395: Individual declarations in merged declaration useQuery must be all exported or all local.
                // query: {
                //     useQuery: false,
                // },
            },
        },
        hooks: {
            afterAllFilesWrite: 'prettier --write',
        },
    },

    nearApiZod: {
        input: {
            target: OPENAPI_TARGETS[process.env.OPENAPI_ENV || 'dev']
        },
        output: {
            mode: 'split',
            target: OPENAPI_OUTPUT_TYPE_PATH +'/src' + OPENAPI_BASE_API_GENERATED_PATH,
            fileExtension: '.zod.ts',
            client: 'zod',

            // ERROR 359 -- { V2: [object Object] };export

        }
    },
});