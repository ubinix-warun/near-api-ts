/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { AccountId } from "./accountId";
import type { PublicKey } from "./publicKey";

/**
 * Account info for validators
 */
export interface AccountInfo {
  account_id: AccountId;
  amount: string;
  public_key: PublicKey;
}
