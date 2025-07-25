/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { SignedTransaction } from "./signedTransaction";
import type { TxExecutionStatus } from "./txExecutionStatus";

export interface RpcSendTransactionRequest {
  signed_tx_base64: SignedTransaction;
  wait_until?: TxExecutionStatus;
}
