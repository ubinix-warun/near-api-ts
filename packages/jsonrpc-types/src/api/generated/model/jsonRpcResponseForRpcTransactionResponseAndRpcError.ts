/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { JsonRpcResponseForRpcTransactionResponseAndRpcErrorOneOf } from "./jsonRpcResponseForRpcTransactionResponseAndRpcErrorOneOf";
import type { JsonRpcResponseForRpcTransactionResponseAndRpcErrorOneOfTwo } from "./jsonRpcResponseForRpcTransactionResponseAndRpcErrorOneOfTwo";

export type JsonRpcResponseForRpcTransactionResponseAndRpcError =
  | (JsonRpcResponseForRpcTransactionResponseAndRpcErrorOneOf & {
      id: string;
      jsonrpc: string;
    })
  | (JsonRpcResponseForRpcTransactionResponseAndRpcErrorOneOfTwo & {
      id: string;
      jsonrpc: string;
    });
