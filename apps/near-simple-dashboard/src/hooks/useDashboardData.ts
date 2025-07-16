import { useMemo } from 'react';
import { DashboardStats } from '../types';
import { useNearStatus, useNearBlock,
  // useNearValidators, useNearNetworkInfo
} from './useNearApi';

export const useDashboardData = () => {
  const statusQuery = useNearStatus();
  const blockQuery = useNearBlock();
  // const validatorsQuery = useNearValidators();
  // const networkQuery = useNearNetworkInfo();

  const loading = statusQuery.isLoading || blockQuery.isLoading ;
      // || validatorsQuery.isLoading;
  const error = statusQuery.error || blockQuery.error ;
      // || validatorsQuery.error;

  const data = useMemo((): DashboardStats => {
    if (!statusQuery.data || !blockQuery.data
        // || !validatorsQuery.data
    ) {
      return {
        nodeStatus: {
          version: 'Loading...',
          blockHeight: 0,
          syncStatus: 'syncing',
          peers: 0,
          uptime: 0,
          lastBlockTime: new Date().toISOString(),
          protocolVersion: 0
        },
        networkHealth: {
          totalValidators: 0,
          activeValidators: 0,
          circulatingSupply: '0',
          totalSupply: '0',
          currentEpoch: 0,
          epochStartTime: new Date().toISOString(),
          epochProgress: 0,
        },
        // validators: [],
      };
    }

    const status = statusQuery.data;
    const block = blockQuery.data;
    // console.log(block);
    // const validators = validatorsQuery.data;
    // const networkInfo = networkQuery.data;

    // Calculate epoch progress (simplified calculation)
    const epochProgress = Math.floor((Math.random() * 100)); // This would need proper calculation based on epoch timing


    return {
      nodeStatus: {
        version: status.result.version.version,
        blockHeight: status.result.sync_info.latest_block_height,
        syncStatus: status.result.sync_info.syncing ? 'syncing' : 'synced',
        // peers: networkInfo?.active_peers?.length || 0,
        peers: 0,
        uptime: 99.5, // This would need to be calculated from node metrics
        // lastBlockTime: new Date(0).toISOString(),
        lastBlockTime: new Date(status.result.sync_info.latest_block_time).toISOString(),
        protocolVersion: status.result.protocol_version,
      },
      networkHealth: {
        // totalValidators: validators.current_validators.length + validators.next_validators.length,
        // activeValidators: validators.current_validators.length,
        totalValidators: 0,
        activeValidators: 0,
        circulatingSupply: (parseInt(block.result.header.total_supply) / 1e24).toFixed(0),
        totalSupply: (parseInt(block.result.header.total_supply) / 1e24).toFixed(0),
        currentEpoch: parseInt(block.result.header.epoch_id.slice(0, 8), 16), // Simplified epoch number
        // epochStartTime: new Date(validators.epoch_start_height * 1000).toISOString(),
        epochStartTime: new Date(0 * 1000).toISOString(),
        epochProgress,
      },
      // validators: validators.current_validators.map((validator, index) => ({
      //   id: validator.account_id,
      //   accountId: validator.account_id,
      //   stake: (parseInt(validator.stake) / 1e24).toFixed(0),
      //   uptime: Math.random() * 20 + 80, // This would need historical data
      //   isActive: true,
      //   lastSeen: new Date().toISOString(),
      //   blocks: Math.floor(Math.random() * 1000), // This would need block production data
      //   chunks: Math.floor(Math.random() * 5000), // This would need chunk production data
      // })),
    };
  }, [statusQuery.data, blockQuery.data,
    // validatorsQuery.data,
    // networkQuery.data
  ]);

  return { 
    data, 
    loading, 
    error: error ? 'Failed to fetch dashboard data' : null 
  };
};