/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { AccessKey } from "./accessKey";
import type { PublicKey } from "./publicKey";

export interface AddKeyAction {
  /** An access key with the permission */
  access_key: AccessKey;
  /** A public key which will be associated with an access_key */
  public_key: PublicKey;
}
