/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { TxExecutionErrorOneOf } from "./txExecutionErrorOneOf";
import type { TxExecutionErrorOneOfTwo } from "./txExecutionErrorOneOfTwo";

/**
 * Error returned in the ExecutionOutcome in case of failure
 */
export type TxExecutionError = TxExecutionErrorOneOf | TxExecutionErrorOneOfTwo;
