import React from 'react';
import { Activity, Server, Users, Clock } from 'lucide-react';
import { NodeStatus as NodeStatusType } from '../types';

interface NodeStatusProps {
  nodeStatus: NodeStatusType;
}

export const NodeStatus: React.FC<NodeStatusProps> = ({ nodeStatus }) => {
  const getSyncStatusColor = (status: string) => {
    switch (status) {
      case 'synced': return 'text-green-400';
      case 'syncing': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSyncStatusBg = (status: string) => {
    switch (status) {
      case 'synced': return 'bg-green-400/20';
      case 'syncing': return 'bg-yellow-400/20';
      case 'error': return 'bg-red-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Server className="h-5 w-5 text-purple-400" />
          Node Status (protocol version = {nodeStatus.protocolVersion})
        </h2>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getSyncStatusBg(nodeStatus.syncStatus)} ${getSyncStatusColor(nodeStatus.syncStatus)}`}>
          {nodeStatus.syncStatus.toUpperCase()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Version</span>
          </div>
          <p className="text-lg font-semibold text-white">{nodeStatus.version}</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Server className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Block Height</span>
          </div>
          <p className="text-lg font-semibold text-white">{nodeStatus.blockHeight.toLocaleString()}</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Connected Peers</span>
          </div>
          <p className="text-lg font-semibold text-white">{nodeStatus.peers}</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Uptime</span>
          </div>
          <p className="text-lg font-semibold text-white">{nodeStatus.uptime}%</p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        Last block: {new Date(nodeStatus.lastBlockTime).toLocaleString()}
      </div>
    </div>
  );
};