/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { StateChangeKindViewOneOf } from "./stateChangeKindViewOneOf";
import type { StateChangeKindViewOneOfThree } from "./stateChangeKindViewOneOfThree";
import type { StateChangeKindViewOneOfFive } from "./stateChangeKindViewOneOfFive";
import type { StateChangeKindViewOneOfSeven } from "./stateChangeKindViewOneOfSeven";

/**
 * It is a [serializable view] of [`StateChangeKind`].

 [serializable view]: ./index.html
 [`StateChangeKind`]: ../types/struct.StateChangeKind.html
 */
export type StateChangeKindView =
  | StateChangeKindViewOneOf
  | StateChangeKindViewOneOfThree
  | StateChangeKindViewOneOfFive
  | StateChangeKindViewOneOfSeven;
