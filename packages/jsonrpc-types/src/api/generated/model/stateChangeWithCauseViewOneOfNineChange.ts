/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { AccessKeyView } from "./accessKeyView";
import type { AccountId } from "./accountId";
import type { PublicKey } from "./publicKey";

export type StateChangeWithCauseViewOneOfNineChange = {
  access_key: AccessKeyView;
  account_id: AccountId;
  public_key: PublicKey;
};
