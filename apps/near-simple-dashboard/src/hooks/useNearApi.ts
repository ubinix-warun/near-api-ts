import { useQuery } from '@tanstack/react-query';
import { customInstance } from '@near-api-ts/jsonrpc-client/src/client'

// NEAR RPC method types
interface BlockRequest {
  finality?: 'final' | 'near-final' | 'optimistic';
  block_id?: string | number;
}

interface StatusResponse {
  result: {
    version: {
      version: string;
      build: string;
    };
    chain_id: string;
    protocol_version: number;
    latest_protocol_version: number;
    rpc_addr: string;
    validators: Array<{
      account_id: string;
      is_slashed: boolean;
    }>;
    sync_info: {
      latest_block_hash: string;
      latest_block_height: number;
      latest_state_root: string;
      latest_block_time: string;
      syncing: boolean;
    };
    validator_account_id?: string;
  }
}

interface BlockResponse {
  result: {
    author: string;
    header: {
      height: number;
      epoch_id: string;
      next_epoch_id: string;
      hash: string;
      prev_hash: string;
      prev_state_root: string;
      chunk_receipts_root: string;
      chunk_headers_root: string;
      chunk_tx_root: string;
      outcome_root: string;
      chunks_included: number;
      challenges_root: string;
      timestamp: number;
      timestamp_nanosec: string;
      random_value: string;
      validator_proposals: any[];
      chunk_mask: boolean[];
      gas_price: string;
      rent_paid: string;
      validator_reward: string;
      total_supply: string;
      challenges_result: any[];
      last_final_block: string;
      last_ds_final_block: string;
      next_bp_hash: string;
      block_merkle_root: string;
      approvals: (string | null)[];
      signature: string;
      latest_protocol_version: number;
    };
    chunks: Array<{
      chunk_hash: string;
      prev_block_hash: string;
      outcome_root: string;
      prev_state_root: string;
      encoded_merkle_root: string;
      encoded_length: number;
      height_created: number;
      height_included: number;
      shard_id: number;
      gas_used: number;
      gas_limit: number;
      rent_paid: string;
      validator_reward: string;
      balance_burnt: string;
      outgoing_receipts_root: string;
      tx_root: string;
      validator_proposals: any[];
      signature: string;
    }>;
  };
}

// interface ValidatorsResponse {
//   current_validators: Array<{
//     account_id: string;
//     public_key: string;
//     stake: string;
//     shards: number[];
//   }>;
//   next_validators: Array<{
//     account_id: string;
//     public_key: string;
//     stake: string;
//     shards: number[];
//   }>;
//   current_fishermen: any[];
//   next_fishermen: any[];
//   current_proposals: any[];
//   prev_epoch_kickout: any[];
//   epoch_start_height: number;
//   epoch_height: number;
// }

// Custom hooks for NEAR RPC calls
export const useNearStatus = () => {
  return useQuery({
    queryKey: ['near-status'],
    queryFn: async (): Promise<StatusResponse> => {
      return customInstance({
        url: '',
        method: 'POST',
        data: {
          jsonrpc: '2.0',
          id: 'dontcare',
          method: 'status',
          params: [],
        },
      });
    },
  });
};

export const useNearBlock = (params: BlockRequest = { finality: 'final' }) => {
  return useQuery({
    queryKey: ['near-block', params],
    queryFn: async (): Promise<BlockResponse> => {
      return customInstance({
        url: '',
        method: 'POST',
        data: {
          jsonrpc: '2.0',
          id: 'dontcare',
          method: 'block',
          params,
        },
      });
    },
  });
};

// export const useNearValidators = (blockId?: string | number) => {
//   return useQuery({
//     queryKey: ['near-validators', blockId],
//     queryFn: async (): Promise<ValidatorsResponse> => {
//       return customInstance({
//         url: '',
//         method: 'POST',
//         data: {
//           jsonrpc: '2.0',
//           id: 'dontcare',
//           method: 'validators',
//           params: blockId ? [blockId] : ['latest'],
//         },
//       });
//     },
//   });
// };

export const useNearNetworkInfo = () => {
  return useQuery({
    queryKey: ['near-network-info'],
    queryFn: async () => {
      return customInstance({
        url: '',
        method: 'POST',
        data: {
          jsonrpc: '2.0',
          id: 'dontcare',
          method: 'network_info',
          params: [],
        },
      });
    },
  });
};