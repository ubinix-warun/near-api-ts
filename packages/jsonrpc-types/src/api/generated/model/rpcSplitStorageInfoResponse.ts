/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Contains the split storage information.
 */
export interface RpcSplitStorageInfoResponse {
  /**
   * @minimum 0
   * @nullable
   */
  cold_head_height?: number | null;
  /**
   * @minimum 0
   * @nullable
   */
  final_head_height?: number | null;
  /**
   * @minimum 0
   * @nullable
   */
  head_height?: number | null;
  /** @nullable */
  hot_db_kind?: string | null;
}
