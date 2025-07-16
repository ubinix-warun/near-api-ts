export interface NodeStatus {
  version: string;
  blockHeight: number;
  syncStatus: 'syncing' | 'synced' | 'error';
  peers: number;
  uptime: number;
  lastBlockTime: string;
  protocolVersion: number;
}

export interface NetworkHealth {
  totalValidators: number;
  activeValidators: number;
  circulatingSupply: string;
  totalSupply: string;
  currentEpoch: number;
  epochStartTime: string;
  epochProgress: number;
}

export interface Validator {
  id: string;
  accountId: string;
  stake: string;
  uptime: number;
  isActive: boolean;
  lastSeen: string;
  blocks: number;
  chunks: number;
}

export interface DashboardStats {
  nodeStatus: NodeStatus;
  networkHealth: NetworkHealth;
  // validators: Validator[];
}