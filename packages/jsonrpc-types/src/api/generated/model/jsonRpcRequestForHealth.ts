/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { JsonRpcRequestForHealthMethod } from "./jsonRpcRequestForHealthMethod";
import type { RpcHealthRequest } from "./rpcHealthRequest";

export interface JsonRpcRequestForHealth {
  id: string;
  jsonrpc: string;
  method: JsonRpcRequestForHealthMethod;
  params: RpcHealthRequest;
}
