/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { ValidatorKickoutReasonOneOf } from "./validatorKickoutReasonOneOf";
import type { ValidatorKickoutReasonOneOfThree } from "./validatorKickoutReasonOneOfThree";
import type { ValidatorKickoutReasonOneOfFive } from "./validatorKickoutReasonOneOfFive";
import type { ValidatorKickoutReasonOneOfSeven } from "./validatorKickoutReasonOneOfSeven";
import type { ValidatorKickoutReasonOneOfNine } from "./validatorKickoutReasonOneOfNine";

/**
 * Reasons for removing a validator from the validator set.
 */
export type ValidatorKickoutReason =
  | "_UnusedSlashed"
  | ValidatorKickoutReasonOneOf
  | ValidatorKickoutReasonOneOfThree
  | "Unstaked"
  | ValidatorKickoutReasonOneOfFive
  | "DidNotGetASeat"
  | ValidatorKickoutReasonOneOfSeven
  | ValidatorKickoutReasonOneOfNine;
