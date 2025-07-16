import React from 'react';
import { Globe, TrendingUp, Coins, Calendar } from 'lucide-react';
import { NetworkHealth as NetworkHealthType } from '../types';

interface NetworkHealthProps {
  networkHealth: NetworkHealthType;
}

export const NetworkHealth: React.FC<NetworkHealthProps> = ({ networkHealth }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Globe className="h-5 w-5 text-purple-400" />
          Network Health
        </h2>
        <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-400/20 text-green-400">
          HEALTHY
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-gray-300">Active Validators</span>
          </div>
          <p className="text-lg font-semibold text-white">
            {networkHealth.activeValidators} / {networkHealth.totalValidators}
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Coins className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-gray-300">Circulating Supply</span>
          </div>
          <p className="text-lg font-semibold text-white">{networkHealth.circulatingSupply} NEAR</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-gray-300">Current Epoch</span>
          </div>
          <p className="text-lg font-semibold text-white">{networkHealth.currentEpoch}</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-gray-300">Total Supply</span>
          </div>
          <p className="text-lg font-semibold text-white">{networkHealth.totalSupply} NEAR</p>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-300">Epoch Progress</span>
          <span className="text-sm font-medium text-white">{networkHealth.epochProgress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${networkHealth.epochProgress}%` }}
          />
        </div>
        <div className="text-xs text-gray-400 mt-2">
          Started: {new Date(networkHealth.epochStartTime).toLocaleString()}
        </div>
      </div>
    </div>
  );
};