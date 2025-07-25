/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Costs associated with an object that can only be sent over the network (and executed
 by the receiver).
 NOTE: `send_sir` or `send_not_sir` fees are usually burned when the item is being created.
 And `execution` fee is burned when the item is being executed.
 */
export interface Fee {
  /**
   * Fee for executing the object.
   * @minimum 0
   */
  execution: number;
  /**
   * Fee for sending an object potentially across the shards.
   * @minimum 0
   */
  send_not_sir: number;
  /**
   * Fee for sending an object from the sender to itself, guaranteeing that it does not leave
 the shard.
   * @minimum 0
   */
  send_sir: number;
}
