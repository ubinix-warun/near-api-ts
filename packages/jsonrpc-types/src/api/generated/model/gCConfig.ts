/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * NEAR Protocol JSON RPC API
 * OpenAPI spec version: 1.0.0
 */
import type { DurationAsStdSchemaProvider } from "./durationAsStdSchemaProvider";

/**
 * Configuration for garbage collection.
 */
export interface GCConfig {
  /**
   * Maximum number of blocks to garbage collect at every garbage collection
 call.
   * @minimum 0
   */
  gc_blocks_limit?: number;
  /**
   * Maximum number of height to go through at each garbage collection step
 when cleaning forks during garbage collection.
   * @minimum 0
   */
  gc_fork_clean_step?: number;
  /**
   * Number of epochs for which we keep store data.
   * @minimum 0
   */
  gc_num_epochs_to_keep?: number;
  /** How often gc should be run */
  gc_step_period?: DurationAsStdSchemaProvider;
}
