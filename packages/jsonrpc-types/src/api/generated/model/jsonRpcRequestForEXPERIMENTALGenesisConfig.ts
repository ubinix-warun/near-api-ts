/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { JsonRpcRequestForEXPERIMENTALGenesisConfigMethod } from "./jsonRpcRequestForEXPERIMENTALGenesisConfigMethod";
import type { GenesisConfigRequest } from "./genesisConfigRequest";

export interface JsonRpcRequestForEXPERIMENTALGenesisConfig {
  id: string;
  jsonrpc: string;
  method: JsonRpcRequestForEXPERIMENTALGenesisConfigMethod;
  params: GenesisConfigRequest;
}
